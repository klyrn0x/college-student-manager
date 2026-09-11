const path = require('node:path');
const fs = require('node:fs');
const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, 'public');
const frontendDirectory = fs.existsSync(path.join(publicDirectory, 'index.html')) ? publicDirectory : __dirname;
const database = new Database(path.join(__dirname, 'college.db'));

database.pragma('foreign_keys = ON');
database.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('Admin', 'Manager', 'User')),
    avatar TEXT,
    is_main_admin INTEGER NOT NULL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE COLLATE NOCASE
  );
  CREATE TABLE IF NOT EXISTS specialties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE COLLATE NOCASE
  );
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    group_name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    course INTEGER NOT NULL,
    status TEXT NOT NULL,
    gpa REAL NOT NULL,
    address TEXT NOT NULL,
    notes TEXT DEFAULT ''
  );
`);

const defaultGroups = ['CS-101', 'CS-202', 'ENG-301', 'BUS-204'];
const defaultSpecialties = ['Программирование', 'Экономика', 'Дизайн', 'Маркетинг'];

const seed = database.transaction(() => {
  database.prepare(`INSERT OR IGNORE INTO users (id, name, email, password, role, is_main_admin)
    VALUES (1, 'Главный администратор', 'admin@college.ru', 'admin123', 'Admin', 1)`).run();
  const addGroup = database.prepare('INSERT OR IGNORE INTO groups (name) VALUES (?)');
  const addSpecialty = database.prepare('INSERT OR IGNORE INTO specialties (name) VALUES (?)');
  defaultGroups.forEach((group) => addGroup.run(group));
  defaultSpecialties.forEach((specialty) => addSpecialty.run(specialty));
});
seed();

app.use(express.json({ limit: '2mb' }));
app.use(express.static(frontendDirectory));

function publicUser(user) {
  if (!user) return null;
  const { password, is_main_admin: isMainAdmin, ...safeUser } = user;
  return { ...safeUser, isMainAdmin: Boolean(isMainAdmin) };
}

function studentFromRow(row) {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    group: row.group_name,
    specialty: row.specialty,
    course: row.course,
    status: row.status,
    gpa: row.gpa,
    address: row.address,
    notes: row.notes || ''
  };
}

app.get('/api/bootstrap', (request, response) => {
  const users = database.prepare('SELECT * FROM users ORDER BY id').all().map(publicUser);
  const students = database.prepare('SELECT * FROM students ORDER BY id').all().map(studentFromRow);
  const groups = database.prepare('SELECT name FROM groups ORDER BY name').all().map((row) => row.name);
  const specialties = database.prepare('SELECT name FROM specialties ORDER BY name').all().map((row) => row.name);
  response.json({ users, students, groups, specialties });
});

app.post('/api/import', (request, response) => {
  const { users = [], students = [], groups = [], specialties = [] } = request.body;
  const importData = database.transaction(() => {
    const addUser = database.prepare(`INSERT OR IGNORE INTO users
      (id, name, email, password, role, avatar, is_main_admin) VALUES (?, ?, ?, ?, ?, ?, ?)`);
    users.forEach((user) => addUser.run(user.id, user.name, user.email, user.password || '', user.role || 'User', user.avatar || null, user.isMainAdmin ? 1 : 0));
    const addGroup = database.prepare('INSERT OR IGNORE INTO groups (name) VALUES (?)');
    groups.forEach((group) => addGroup.run(group));
    const addSpecialty = database.prepare('INSERT OR IGNORE INTO specialties (name) VALUES (?)');
    specialties.forEach((specialty) => addSpecialty.run(specialty));
    const addStudent = database.prepare(`INSERT OR IGNORE INTO students
      (id, first_name, last_name, email, phone, group_name, specialty, course, status, gpa, address, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    students.forEach((student) => addStudent.run(student.id, student.firstName, student.lastName, student.email, student.phone, student.group, student.specialty, student.course, student.status, student.gpa, student.address, student.notes || ''));
  });
  importData();
  response.status(204).end();
});

app.post('/api/auth/login', (request, response) => {
  const { email, password } = request.body;
  const user = database.prepare('SELECT * FROM users WHERE email = ? AND password = ?').get(email, password);
  if (!user) return response.status(401).json({ error: 'invalid_credentials' });
  response.json(publicUser(user));
});

app.post('/api/auth/register', (request, response) => {
  const { name, email, password, role = 'User' } = request.body;
  try {
    const result = database.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)').run(name, email, password, role);
    response.status(201).json(publicUser(database.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)));
  } catch (error) {
    response.status(409).json({ error: 'user_exists' });
  }
});

app.post('/api/students', (request, response) => {
  const student = request.body;
  const id = Date.now();
  database.prepare(`INSERT INTO students
    (id, first_name, last_name, email, phone, group_name, specialty, course, status, gpa, address, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(id, student.firstName, student.lastName, student.email, student.phone, student.group, student.specialty, student.course, student.status, student.gpa, student.address, student.notes || '');
  response.status(201).json({ id, ...student });
});

app.put('/api/students/:id', (request, response) => {
  const student = request.body;
  database.prepare(`UPDATE students SET first_name = ?, last_name = ?, email = ?, phone = ?, group_name = ?, specialty = ?, course = ?, status = ?, gpa = ?, address = ?, notes = ? WHERE id = ?`)
    .run(student.firstName, student.lastName, student.email, student.phone, student.group, student.specialty, student.course, student.status, student.gpa, student.address, student.notes || '', request.params.id);
  const updated = database.prepare('SELECT * FROM students WHERE id = ?').get(request.params.id);
  response.json(studentFromRow(updated));
});

app.delete('/api/students/:id', (request, response) => {
  database.prepare('DELETE FROM students WHERE id = ?').run(request.params.id);
  response.status(204).end();
});

app.post('/api/groups', (request, response) => {
  database.prepare('INSERT OR IGNORE INTO groups (name) VALUES (?)').run(request.body.name);
  response.status(201).json({ name: request.body.name });
});

app.post('/api/specialties', (request, response) => {
  database.prepare('INSERT OR IGNORE INTO specialties (name) VALUES (?)').run(request.body.name);
  response.status(201).json({ name: request.body.name });
});

app.put('/api/users/:id', (request, response) => {
  const { avatar } = request.body;
  database.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(avatar || null, request.params.id);
  response.json(publicUser(database.prepare('SELECT * FROM users WHERE id = ?').get(request.params.id)));
});

app.delete('/api/users/:id', (request, response) => {
  database.prepare('DELETE FROM users WHERE id = ?').run(request.params.id);
  response.status(204).end();
});

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ error: 'server_error' });
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`College Student Manager: http://localhost:${port}`);
  console.log(`Frontend directory: ${frontendDirectory}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Порт ${port} уже занят. Остановите старый node.exe или используйте другой порт: PORT=3001 npm start`);
    process.exitCode = 1;
    return;
  }
  throw error;
});