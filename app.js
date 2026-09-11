const STORAGE_KEYS = {
  users: 'college_users',
  students: 'college_students',
  groups: 'college_groups',
  specialties: 'college_specialties',
  activeUser: 'college_active_user',
  lastLogin: 'college_last_login',
  language: 'college_language',
  theme: 'college_theme'
};

const translations = {
  ru: {
    brand: 'College CRM',
    collegeName: 'VATK',
    collegeFullName: 'Высший аграрно-технологический колледж',
    title: 'Student Manager',
    subtitle: 'Управление студентами колледжа в одном месте.',
    registerTitle: 'Регистрация',
    loginText: 'Войти',
    createAccount: 'Создать аккаунт',
    logoutText: 'Выход',
    alreadyAccount: 'Уже есть аккаунт?',
    roleUser: 'Студент',
    roleManager: 'Менеджер',
    namePlaceholder: 'Имя и фамилия',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Пароль',
    navDashboard: 'Главная',
    navStudents: 'Студенты',
    navGroups: 'Группы',
    navProfile: 'Профиль',
    navAdmin: 'Админ',
    dashboardBadge: 'Реформа академического учета',
    dashboardTitle: 'Эффективное управление студентами колледжа',
    addStudent: 'Добавить студента',
    statusStats: 'Статистика по статусам',
    gpaGroups: 'Средний балл по группам',
    allGroups: 'Все группы',
    allSpecialties: 'Все специальности',
    allStatuses: 'Все статусы',
    statusActive: 'Активный',
    statusVacation: 'На каникулах',
    statusDropped: 'Отчислен',
    statusGraduate: 'Выпускник',
    searchPlaceholder: 'Поиск по имени, email, группе...',
    groupsTitle: 'Группы и специальности',
    profileCabinet: 'Личный кабинет',
    profileRoleLabel: 'Роль',
    profileStudentsLabel: 'Студентов в системе',
    profileLastLoginLabel: 'Последний вход',
    adminPanelTitle: 'Панель администратора',
    groupManageTitle: 'Управление группами',
    specialtyManageTitle: 'Управление специальностями',
    addGroup: 'Добавить группу',
    addSpecialty: 'Добавить специальность',
    tableName: 'Имя',
    tableRole: 'Роль',
    tableStatus: 'Состояние',
    tableActions: 'Действия',
    mainAdmin: 'Главный админ',
    removeAdmin: 'Удалить аккаунт',
    cannotRemoveMainAdmin: 'Главного администратора удалить нельзя.',
    confirmRemoveAdmin: 'Удалить этого администратора?',
    adminOnlyAction: 'Удалять студентов могут только администратор или менеджер.',
    loginSystem: 'Вход в систему',
    studentModalAdd: 'Добавить студента',
    firstNamePlaceholder: 'Имя',
    lastNamePlaceholder: 'Фамилия',
    phonePlaceholder: 'Телефон',
    coursePlaceholder: 'Курс',
    gpaPlaceholder: 'Средний балл',
    addressPlaceholder: 'Адрес',
    notesPlaceholder: 'Дополнительные заметки',
    saveText: 'Сохранить',
    statsTotal: 'Всего студентов',
    statsActive: 'Активные',
    statsGraduate: 'Выпускники',
    statsGpa: 'Средний балл',
    filterNotFound: 'Студенты не найдены.',
    editStudent: 'Редактировать',
    deleteStudent: 'Удалить',
    groupCountSuffix: 'групп',
    groupPeopleSuffix: 'студентов',
    profileGuest: 'Пользователь не вошёл',
    profileNoData: 'Нет данных',
    changeAvatar: 'Изменить аватар',
    adminOnlyStudentCreate: 'Только администратор может добавлять студентов.',
    adminAccess: 'Полный доступ',
    adminReady: 'Готов',
    confirmDelete: 'Удалить студента из базы?',
    invalidCredentials: 'Неверный email или пароль.',
    fillAllFields: 'Заполните все поля.',
    userExists: 'Пользователь с таким email уже существует.',
    requiredMessage: 'Все поля обязательны для заполнения.',
    gpaRequired: 'Средний балл обязателен для заполнения.',
    sortNameAsc: 'Имя ↑',
    sortNameDesc: 'Имя ↓',
    sortGpaDesc: 'Средний балл ↓',
    sortGpaAsc: 'Средний балл ↑',
    sortCourseDesc: 'Курс ↓'
  },
  kz: {
    brand: 'College CRM',
    collegeName: 'VATK',
    collegeFullName: 'Жоғары аграрлық-технологиялық колледж',
    title: 'Student Manager',
    subtitle: 'Колледж студенттерін басқару бір жерде.',
    registerTitle: 'Тіркелу',
    loginText: 'Кіру',
    createAccount: 'Аккаунт құру',
    logoutText: 'Шығу',
    alreadyAccount: 'Аккаунты бар ма?',
    roleUser: 'Студент',
    roleManager: 'Менеджер',
    namePlaceholder: 'Аты-жөні',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Құпия сөз',
    navDashboard: 'Басты',
    navStudents: 'Студенттер',
    navGroups: 'Топтар',
    navProfile: 'Профиль',
    navAdmin: 'Админ',
    dashboardBadge: 'Академиялық есептілікті жаңарту',
    dashboardTitle: 'Колледж студенттерін тиімді басқару',
    addStudent: 'Студент қосу',
    statusStats: 'Статус статистикасы',
    gpaGroups: 'Топ бойынша орташа балл',
    allGroups: 'Барлық топтар',
    allSpecialties: 'Барлық мамандықтар',
    allStatuses: 'Барлық статустар',
    statusActive: 'Белсенді',
    statusVacation: 'Демалыста',
    statusDropped: 'Шығарылды',
    statusGraduate: 'Бітірген',
    searchPlaceholder: 'Аты, email, топ бойынша іздеу...',
    groupsTitle: 'Топтар мен мамандықтар',
    profileCabinet: 'Жеке кабинет',
    profileRoleLabel: 'Рөл',
    profileStudentsLabel: 'Жүйедегі студенттер',
    profileLastLoginLabel: 'Соңғы кіру',
    adminPanelTitle: 'Администратор панелі',
    groupManageTitle: 'Топтарды басқару',
    specialtyManageTitle: 'Мамандықтарды басқару',
    addGroup: 'Топ қосу',
    addSpecialty: 'Мамандық қосу',
    tableName: 'Аты',
    tableRole: 'Рөл',
    tableStatus: 'Күй',
    tableActions: 'Әрекеттер',
    mainAdmin: 'Бас админ',
    removeAdmin: 'Аккаунтты жою',
    cannotRemoveMainAdmin: 'Бас админді жоюға болмайды.',
    confirmRemoveAdmin: 'Бұл админді жою керек пе?',
    adminOnlyAction: 'Студенттерді тек админ немесе менеджер жоя алады.',
    loginSystem: 'Жүйеге кіру',
    studentModalAdd: 'Студент қосу',
    firstNamePlaceholder: 'Аты',
    lastNamePlaceholder: 'Тегі',
    phonePlaceholder: 'Телефон',
    coursePlaceholder: 'Курс',
    gpaPlaceholder: 'Орташа балл',
    addressPlaceholder: 'Мекенжай',
    notesPlaceholder: 'Қосымша ескертпелер',
    saveText: 'Сақтау',
    statsTotal: 'Барлық студенттер',
    statsActive: 'Белсенділер',
    statsGraduate: 'Бітіргендер',
    statsGpa: 'Орташа балл',
    filterNotFound: 'Студенттер табылмады.',
    editStudent: 'Өңдеу',
    deleteStudent: 'Жою',
    groupCountSuffix: 'топ',
    groupPeopleSuffix: 'студент',
    profileGuest: 'Пайдаланушы кірмеген',
    profileNoData: 'Деректер жоқ',
    changeAvatar: 'Аватарды өзгерту',
    adminOnlyStudentCreate: 'Студентті тек администратор қоса алады.',
    adminAccess: 'Толық доступ',
    adminReady: 'Дайын',
    confirmDelete: 'Студентті базадан жойғыңыз келе ме?',
    invalidCredentials: 'Email немесе құпия сөз дұрыс емес.',
    fillAllFields: 'Барлық өрістерді толтырыңыз.',
    userExists: 'Бұл email-мен тіркелген пайдаланушы бар.',
    requiredMessage: 'Барлық өрістер міндетті түрде толтырылады.',
    gpaRequired: 'Орташа балл міндетті түрде толтырылады.',
    sortNameAsc: 'Аты ↑',
    sortNameDesc: 'Аты ↓',
    sortGpaDesc: 'Орташа балл ↓',
    sortGpaAsc: 'Орташа балл ↑',
    sortCourseDesc: 'Курс ↓'
  },
  en: {
    brand: 'College CRM',
    collegeName: 'VATK',
    collegeFullName: 'Higher Agrarian and Technological College',
    title: 'Student Manager',
    subtitle: 'Manage college students from one place.',
    registerTitle: 'Register',
    loginText: 'Login',
    createAccount: 'Create account',
    logoutText: 'Logout',
    alreadyAccount: 'Already have an account?',
    roleUser: 'Student',
    roleManager: 'Manager',
    namePlaceholder: 'Full name',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    navDashboard: 'Home',
    navStudents: 'Students',
    navGroups: 'Groups',
    navProfile: 'Profile',
    navAdmin: 'Admin',
    dashboardBadge: 'Academic records modernization',
    dashboardTitle: 'Efficient college student management',
    addStudent: 'Add student',
    statusStats: 'Status statistics',
    gpaGroups: 'Average GPA by groups',
    allGroups: 'All groups',
    allSpecialties: 'All specialties',
    allStatuses: 'All statuses',
    statusActive: 'Active',
    statusVacation: 'On vacation',
    statusDropped: 'Dropped',
    statusGraduate: 'Graduate',
    searchPlaceholder: 'Search by name, email, group...',
    groupsTitle: 'Groups and specialties',
    profileCabinet: 'Profile',
    profileRoleLabel: 'Role',
    profileStudentsLabel: 'Students in system',
    profileLastLoginLabel: 'Last login',
    adminPanelTitle: 'Admin panel',
    groupManageTitle: 'Manage groups',
    specialtyManageTitle: 'Manage specialties',
    addGroup: 'Add group',
    addSpecialty: 'Add specialty',
    tableName: 'Name',
    tableRole: 'Role',
    tableStatus: 'Status',
    tableActions: 'Actions',
    mainAdmin: 'Main admin',
    removeAdmin: 'Remove account',
    cannotRemoveMainAdmin: 'The main administrator cannot be removed.',
    confirmRemoveAdmin: 'Remove this administrator?',
    adminOnlyAction: 'Only an administrator or manager can delete students.',
    loginSystem: 'Login',
    studentModalAdd: 'Add student',
    firstNamePlaceholder: 'First name',
    lastNamePlaceholder: 'Last name',
    phonePlaceholder: 'Phone',
    coursePlaceholder: 'Course',
    gpaPlaceholder: 'GPA',
    addressPlaceholder: 'Address',
    notesPlaceholder: 'Additional notes',
    saveText: 'Save',
    statsTotal: 'Total students',
    statsActive: 'Active',
    statsGraduate: 'Graduates',
    statsGpa: 'Average GPA',
    filterNotFound: 'No students found.',
    editStudent: 'Edit',
    deleteStudent: 'Delete',
    groupCountSuffix: 'groups',
    groupPeopleSuffix: 'students',
    profileGuest: 'User not signed in',
    profileNoData: 'No data',
    changeAvatar: 'Change avatar',
    adminOnlyStudentCreate: 'Only an administrator can add students.',
    adminAccess: 'Full access',
    adminReady: 'Ready',
    confirmDelete: 'Delete this student from the database?',
    invalidCredentials: 'Incorrect email or password.',
    fillAllFields: 'Please fill in all the fields.',
    userExists: 'A user with this email already exists.',
    requiredMessage: 'All fields are required.',
    gpaRequired: 'GPA is required.',
    sortNameAsc: 'Name ↑',
    sortNameDesc: 'Name ↓',
    sortGpaDesc: 'GPA ↓',
    sortGpaAsc: 'GPA ↑',
    sortCourseDesc: 'Course ↓'
  }
};

const defaultUsers = [
  { id: 1, name: 'Администратор', email: 'admin@college.ru', password: '24092008', role: 'Admin', isMainAdmin: true },
  { id: 2, name: 'Менеджер кафедры', email: 'manager@college.ru', password: 'manager123', role: 'Manager' },
  { id: 3, name: 'Студент', email: 'student@college.ru', password: 'student123', role: 'User' }
];

const defaultGroups = ['CS-101', 'CS-202', 'ENG-301', 'BUS-204'];
const defaultSpecialties = ['Компьютерные науки', 'Информационные технологии', 'Маркетинг', 'Дизайн'];

const defaultStudents = [
  {
    id: 1,
    firstName: 'Алина',
    lastName: 'Иванова',
    email: 'alina.ivanova@mail.com',
    phone: '+7 (900) 111-22-33',
    group: 'CS-101',
    specialty: 'Компьютерные науки',
    course: 2,
    status: 'Активный',
    gpa: 4.8,
    address: 'г. Москва, ул. Ленина, 12',
    notes: 'Сильный студент, участвует в олимпиадах.'
  },
  {
    id: 2,
    firstName: 'Дмитрий',
    lastName: 'Ковалев',
    email: 'dmitriy.kovalev@mail.com',
    phone: '+7 (900) 222-33-44',
    group: 'CS-202',
    specialty: 'Информационные технологии',
    course: 3,
    status: 'На каникулах',
    gpa: 4.5,
    address: 'г. Санкт-Петербург, ул. Пушкина, 44',
    notes: 'Стажировка в IT-компании.'
  },
  {
    id: 3,
    firstName: 'Мария',
    lastName: 'Смирнова',
    email: 'maria.smirnova@mail.com',
    phone: '+7 (900) 333-44-55',
    group: 'ENG-301',
    specialty: 'Дизайн',
    course: 1,
    status: 'Активный',
    gpa: 4.9,
    address: 'г. Казань, ул. Баумана, 8',
    notes: 'Участвует в выставках и проектах.'
  },
  {
    id: 4,
    firstName: 'Роман',
    lastName: 'Петров',
    email: 'roman.petrov@mail.com',
    phone: '+7 (900) 444-55-66',
    group: 'BUS-204',
    specialty: 'Маркетинг',
    course: 4,
    status: 'Выпускник',
    gpa: 4.2,
    address: 'г. Екатеринбург, ул. Горького, 90',
    notes: 'Готовится к защите диплома.'
  },
  {
    id: 5,
    firstName: 'Екатерина',
    lastName: 'Морозова',
    email: 'ekaterina.morozova@mail.com',
    phone: '+7 (900) 555-66-77',
    group: 'CS-101',
    specialty: 'Компьютерные науки',
    course: 2,
    status: 'Отчислен',
    gpa: 2.7,
    address: 'г. Новосибирск, ул. Лесная, 15',
    notes: 'Временно не учится по семейным причинам.'
  }
];

const additionalStudents = [
  {
    id: 6,
    firstName: 'Айдана',
    lastName: 'Серикова',
    email: 'aidana.serikova@mail.com',
    phone: '+7 (900) 606-77-88',
    group: 'CS-202',
    specialty: 'Информационные технологии',
    course: 2,
    status: 'Активный',
    gpa: 4.6,
    address: 'г. Алматы, ул. Абая, 18',
    notes: 'Участница студенческого IT-клуба.'
  },
  {
    id: 7,
    firstName: 'Тимур',
    lastName: 'Ахметов',
    email: 'timur.akhmetov@mail.com',
    phone: '+7 (900) 717-88-99',
    group: 'ENG-301',
    specialty: 'Компьютерные науки',
    course: 3,
    status: 'Активный',
    gpa: 4.4,
    address: 'г. Астана, ул. Сарыарка, 24',
    notes: 'Разрабатывает учебное мобильное приложение.'
  },
  {
    id: 8,
    firstName: 'София',
    lastName: 'Волкова',
    email: 'sofia.volkova@mail.com',
    phone: '+7 (900) 828-99-00',
    group: 'BUS-204',
    specialty: 'Маркетинг',
    course: 2,
    status: 'На каникулах',
    gpa: 4.1,
    address: 'г. Караганда, ул. Ермекова, 7',
    notes: 'Проходит практику в отделе маркетинга.'
  },
  {
    id: 9,
    firstName: 'Нурлан',
    lastName: 'Касымов',
    email: 'nurlan.kassymov@mail.com',
    phone: '+7 (900) 939-00-11',
    group: 'CS-101',
    specialty: 'Компьютерные науки',
    course: 1,
    status: 'Активный',
    gpa: 4.0,
    address: 'г. Шымкент, ул. Тауке хана, 31',
    notes: 'Посещает кружок робототехники.'
  },
  {
    id: 10,
    firstName: 'Елена',
    lastName: 'Орлова',
    email: 'elena.orlova@mail.com',
    phone: '+7 (900) 040-11-22',
    group: 'ENG-301',
    specialty: 'Дизайн',
    course: 4,
    status: 'Выпускник',
    gpa: 4.7,
    address: 'г. Павлодар, ул. Академика Маргулана, 10',
    notes: 'Готовит выпускной дизайн-проект.'
  },
  {
    id: 11,
    firstName: 'Арман',
    lastName: 'Жумабеков',
    email: 'arman.zhumabekov@mail.com',
    phone: '+7 (900) 151-22-33',
    group: 'CS-202',
    specialty: 'Информационные технологии',
    course: 3,
    status: 'Активный',
    gpa: 3.9,
    address: 'г. Тараз, ул. Толе би, 42',
    notes: 'Участвует в хакатонах колледжа.'
  },
  {
    id: 12,
    firstName: 'Дарья',
    lastName: 'Никитина',
    email: 'daria.nikitina@mail.com',
    phone: '+7 (900) 262-33-44',
    group: 'BUS-204',
    specialty: 'Маркетинг',
    course: 1,
    status: 'Активный',
    gpa: 4.3,
    address: 'г. Костанай, ул. Аль-Фараби, 16',
    notes: 'Ответственная за медиа-проект группы.'
  },
  {
    id: 13,
    firstName: 'Максим',
    lastName: 'Соколов',
    email: 'maksim.sokolov@mail.com',
    phone: '+7 (900) 373-44-55',
    group: 'CS-101',
    specialty: 'Информационные технологии',
    course: 2,
    status: 'На каникулах',
    gpa: 3.8,
    address: 'г. Усть-Каменогорск, ул. Казахстан, 20',
    notes: 'Изучает системное администрирование.'
  },
  {
    id: 14,
    firstName: 'Жанна',
    lastName: 'Муратова',
    email: 'zhanna.muratova@mail.com',
    phone: '+7 (900) 484-55-66',
    group: 'ENG-301',
    specialty: 'Дизайн',
    course: 3,
    status: 'Активный',
    gpa: 4.8,
    address: 'г. Актобе, ул. Есет батыра, 9',
    notes: 'Работает над фирменным стилем колледжа.'
  },
  {
    id: 15,
    firstName: 'Илья',
    lastName: 'Мельников',
    email: 'ilya.melnikov@mail.com',
    phone: '+7 (900) 595-66-77',
    group: 'BUS-204',
    specialty: 'Маркетинг',
    course: 4,
    status: 'Выпускник',
    gpa: 4.5,
    address: 'г. Семей, ул. Шакарима, 27',
    notes: 'Завершает дипломный проект по рекламе.'
  }
];

const state = {
  currentView: 'dashboard',
  activeUser: null,
  search: '',
  groupFilter: 'all',
  specialtyFilter: 'all',
  statusFilter: 'all',
  sort: 'name-asc',
  editingStudentId: null,
  authMode: 'login',
  lang: readStorage(STORAGE_KEYS.language, 'ru'),
  theme: readStorage(STORAGE_KEYS.theme, 'light')
};

let databaseData = null;

function readStorage(key, fallback) {
  const saved = localStorage.getItem(key);
  if (!saved) return fallback;
  try {
    return JSON.parse(saved);
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function t(key) {
  return translations[state.lang]?.[key] || translations.ru[key] || key;
}

function setLanguage(lang) {
  state.lang = lang;
  writeStorage(STORAGE_KEYS.language, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = t(key);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = t(key);
    if (value) {
      element.placeholder = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  if (document.getElementById('landingRole')) {
    const landingRole = document.getElementById('landingRole');
    const registerRole = document.getElementById('registerRole');
    Array.from(landingRole.options).forEach((option) => {
      option.textContent = t(option.dataset.i18n);
    });
    Array.from(registerRole.options).forEach((option) => {
      option.textContent = t(option.dataset.i18n);
    });
  }
}

function setTheme(theme) {
  state.theme = theme;
  writeStorage(STORAGE_KEYS.theme, theme);
  document.body.dataset.theme = theme;
  document.querySelectorAll('.theme-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
}

async function seedData() {
  if (!readStorage(STORAGE_KEYS.users, null)) {
    writeStorage(STORAGE_KEYS.users, defaultUsers);
  }

  const users = readStorage(STORAGE_KEYS.users, []);
  const mainAdmin = users.find((user) => user.email?.toLowerCase() === 'admin@college.ru');
  if (mainAdmin) {
    mainAdmin.password = '24092008';
    mainAdmin.role = 'Admin';
    mainAdmin.isMainAdmin = true;
    writeStorage(STORAGE_KEYS.users, users);
  }

  if (!readStorage(STORAGE_KEYS.groups, null)) {
    writeStorage(STORAGE_KEYS.groups, defaultGroups);
  }

  if (!readStorage(STORAGE_KEYS.specialties, null)) {
    writeStorage(STORAGE_KEYS.specialties, defaultSpecialties);
  }

  if (!readStorage(STORAGE_KEYS.students, null)) {
    writeStorage(STORAGE_KEYS.students, defaultStudents);
  }

  const students = readStorage(STORAGE_KEYS.students, []);
  const existingEmails = new Set(students.map((student) => student.email));
  const missingStudents = additionalStudents.filter((student) => !existingEmails.has(student.email));
  if (missingStudents.length) {
    writeStorage(STORAGE_KEYS.students, [...students, ...missingStudents]);
  }

  const activeUser = readStorage(STORAGE_KEYS.activeUser, null);
  if (activeUser) {
    state.activeUser = activeUser;
  }

  const response = await fetch('/api/bootstrap');
  databaseData = await response.json();

  if (!databaseData.students.length && !databaseData.users.some((user) => user.email === 'admin@college.ru' && user.id !== 1)) {
    const localData = {
      users: readStorage(STORAGE_KEYS.users, []),
      students: readStorage(STORAGE_KEYS.students, []),
      groups: readStorage(STORAGE_KEYS.groups, []),
      specialties: readStorage(STORAGE_KEYS.specialties, [])
    };
    await fetch('/api/import', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localData)
    });
    databaseData = await (await fetch('/api/bootstrap')).json();
  }
}

function getUsers() {
  return databaseData?.users || readStorage(STORAGE_KEYS.users, []);
}

function getStudents() {
  return databaseData?.students || readStorage(STORAGE_KEYS.students, []);
}

function getGroups() {
  return databaseData?.groups || readStorage(STORAGE_KEYS.groups, []);
}

function getSpecialties() {
  return databaseData?.specialties || readStorage(STORAGE_KEYS.specialties, []);
}

function isMainAdmin(user) {
  return user?.isMainAdmin === true || user?.email?.toLowerCase() === 'admin@college.ru';
}

function isAdmin(user = state.activeUser) {
  return user?.role === 'Admin';
}

function getRoleLabel(role) {
  if (role === 'User') return t('roleUser');
  if (role === 'Manager') return t('roleManager');
  return role;
}

function setCurrentUser(user) {
  state.activeUser = user;
  writeStorage(STORAGE_KEYS.activeUser, user);
  localStorage.setItem(STORAGE_KEYS.lastLogin, new Date().toISOString());
}

function clearCurrentUser() {
  state.activeUser = null;
  localStorage.removeItem(STORAGE_KEYS.activeUser);
}

function toggleAuthScreen() {
  const landing = document.getElementById('landingScreen');
  const appShell = document.getElementById('appShell');
  const shouldShowLanding = !state.activeUser;

  landing.classList.toggle('hidden', !shouldShowLanding);
  appShell.classList.toggle('hidden', shouldShowLanding);

  if (!shouldShowLanding) {
    showView('dashboard');
  }
}

function api() {
  return {
    refresh: async () => {
      databaseData = await (await fetch('/api/bootstrap')).json();
    },
    addStudent: async (payload) => {
      const response = await fetch('/api/students', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const newStudent = await response.json();
      await api().refresh();
      return newStudent;
    },
    updateStudent: async (id, payload) => {
      const response = await fetch(`/api/students/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const updated = await response.json();
      await api().refresh();
      return updated;
    },
    deleteStudent: async (id) => {
      await fetch(`/api/students/${id}`, { method: 'DELETE' });
      await api().refresh();
    },
    addGroup: async (name) => {
      await fetch('/api/groups', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) });
      await api().refresh();
    },
    addSpecialty: async (name) => {
      await fetch('/api/specialties', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) });
      await api().refresh();
    }
  };
}

function showView(viewName) {
  state.currentView = viewName;

  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === `${viewName}View`);
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });

  updateAccessControl();
}

function updateAccessControl() {
  const isLoggedIn = Boolean(state.activeUser);
  const userRole = state.activeUser?.role || 'Guest';

  const loginBtn = document.getElementById('openLoginBtn');
  const registerBtn = document.getElementById('openRegisterBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const userBadge = document.getElementById('userBadge');

  if (loginBtn) loginBtn.classList.toggle('hidden', isLoggedIn);
  if (registerBtn) registerBtn.classList.toggle('hidden', isLoggedIn);
  if (logoutBtn) logoutBtn.classList.toggle('hidden', !isLoggedIn);
  if (userBadge) userBadge.classList.toggle('hidden', !isLoggedIn);

  if (isLoggedIn) {
    document.getElementById('userName').textContent = state.activeUser.name;
    document.getElementById('userRole').textContent = getRoleLabel(userRole);
  }

  document.getElementById('addStudentBtn')?.classList.toggle('hidden', !isAdmin());
  document.getElementById('addStudentFromDashboard')?.classList.toggle('hidden', !isAdmin());

  const adminOnly = document.querySelectorAll('.admin-only');
  adminOnly.forEach((element) => {
    const allowed = userRole === 'Admin' || userRole === 'Manager';
    element.style.display = !isLoggedIn || !allowed ? 'none' : 'inline-flex';
  });

  const adminSection = document.getElementById('adminView');
  if (adminSection) {
    if (userRole !== 'Admin' && userRole !== 'Manager') {
      adminSection.classList.add('hidden');
    } else {
      adminSection.classList.remove('hidden');
    }
  }
}

function renderStats() {
  const students = getStudents();
  const total = students.length;
  const active = students.filter((s) => s.status === 'Активный').length;
  const graduates = students.filter((s) => s.status === 'Выпускник').length;
  const avgGpa = total ? (students.reduce((sum, student) => sum + Number(student.gpa || 0), 0) / total).toFixed(2) : '0.00';

  const stats = [
    { label: t('statsTotal'), value: total, icon: '👥' },
    { label: t('statsActive'), value: active, icon: '✅' },
    { label: t('statsGraduate'), value: graduates, icon: '🎓' },
    { label: t('statsGpa'), value: avgGpa, icon: '📈' }
  ];

  const statsGrid = document.getElementById('statsGrid');
  if (statsGrid) {
    statsGrid.innerHTML = stats.map((stat) => `
      <div class="stat-card">
        <div class="stat-top">
          <h4>${stat.label}</h4>
          <div class="stat-icon">${stat.icon}</div>
        </div>
        <strong>${stat.value}</strong>
      </div>
    `).join('');
  }

  const statusChart = document.getElementById('statusChart');
  const statuses = [t('statusActive'), t('statusVacation'), t('statusDropped'), t('statusGraduate')];
  const maxCount = Math.max(...statuses.map((status) => students.filter((student) => student.status === status).length), 1);

  if (statusChart) {
    statusChart.innerHTML = statuses.map((status) => {
      const count = students.filter((student) => student.status === status).length;
      const percent = (count / maxCount) * 100;
      return `
        <div class="chart-item">
          <div class="chart-label"><span>${status}</span><strong>${count}</strong></div>
          <div class="progress"><div class="progress-bar" style="width: ${percent}%"></div></div>
        </div>
      `;
    }).join('');
  }

  const groups = getGroups();
  const groupScoreChart = document.getElementById('groupScoreChart');
  if (groupScoreChart) {
    groupScoreChart.innerHTML = groups.map((group) => {
      const groupStudents = students.filter((student) => student.group === group);
      const avg = groupStudents.length ? (groupStudents.reduce((sum, item) => sum + Number(item.gpa || 0), 0) / groupStudents.length).toFixed(2) : '0.00';
      const width = Math.min((Number(avg) / 5) * 100, 100);
      return `
        <div class="group-bar">
          <div class="label"><span>${group}</span><strong>${avg}</strong></div>
          <div class="progress"><div class="progress-bar" style="width: ${width}%"></div></div>
        </div>
      `;
    }).join('');
  }
}

function renderFilters() {
  const groups = getGroups();
  const specialties = getSpecialties();

  const groupFilterSelect = document.getElementById('groupFilter');
  const specialtyFilterSelect = document.getElementById('specialtyFilter');

  if (groupFilterSelect) {
    groupFilterSelect.innerHTML = `<option value="all">${t('allGroups')}</option>` + groups.map((group) => `<option value="${group}">${group}</option>`).join('');
    groupFilterSelect.value = state.groupFilter;
  }

  if (specialtyFilterSelect) {
    specialtyFilterSelect.innerHTML = `<option value="all">${t('allSpecialties')}</option>` + specialties.map((specialty) => `<option value="${specialty}">${specialty}</option>`).join('');
    specialtyFilterSelect.value = state.specialtyFilter;
  }

  const studentGroupSelect = document.getElementById('studentGroup');
  const studentSpecialtySelect = document.getElementById('studentSpecialty');

  if (studentGroupSelect) {
    studentGroupSelect.innerHTML = groups.map((group) => `<option value="${group}">${group}</option>`).join('');
  }

  if (studentSpecialtySelect) {
    studentSpecialtySelect.innerHTML = specialties.map((specialty) => `<option value="${specialty}">${specialty}</option>`).join('');
  }
}

function getFilteredStudents() {
  const students = [...getStudents()];
  const search = state.search.trim().toLowerCase();

  const filtered = students.filter((student) => {
    const matchesSearch = !search || [
      student.firstName,
      student.lastName,
      student.email,
      student.group,
      student.specialty
    ].join(' ').toLowerCase().includes(search);

    const matchesGroup = state.groupFilter === 'all' || student.group === state.groupFilter;
    const matchesSpecialty = state.specialtyFilter === 'all' || student.specialty === state.specialtyFilter;
    const matchesStatus = state.statusFilter === 'all' || student.status === state.statusFilter;

    return matchesSearch && matchesGroup && matchesSpecialty && matchesStatus;
  });

  filtered.sort((a, b) => {
    switch (state.sort) {
      case 'name-desc':
        return `${b.lastName} ${b.firstName}`.localeCompare(`${a.lastName} ${a.firstName}`);
      case 'gpa-desc':
        return Number(b.gpa) - Number(a.gpa);
      case 'gpa-asc':
        return Number(a.gpa) - Number(b.gpa);
      case 'year-desc':
        return Number(b.course) - Number(a.course);
      case 'name-asc':
      default:
        return `${a.lastName} ${a.firstName}`.localeCompare(`${b.lastName} ${b.firstName}`);
    }
  });

  return filtered;
}

function renderStudents() {
  const students = getFilteredStudents();
  const studentsList = document.getElementById('studentsList');

  if (!studentsList) return;

  if (!students.length) {
    studentsList.innerHTML = `<div class="panel"><p>${t('filterNotFound')}</p></div>`;
    return;
  }

  studentsList.innerHTML = students.map((student) => {
    const initials = `${student.firstName[0] || ''}${student.lastName[0] || ''}`.toUpperCase();
    const statusClass = student.status === 'Активный' ? 'active' : student.status === 'На каникулах' ? 'idle' : student.status === 'Отчислен' ? 'dropped' : 'graduated';
    return `
      <article class="student-card">
        <div class="student-head">
          <div class="student-avatar">${initials}</div>
          <div class="student-meta">
            <h4>${student.firstName} ${student.lastName}</h4>
            <span class="student-role">${student.group}</span>
          </div>
          <span class="status-tag ${statusClass}">${student.status}</span>
        </div>

        <div class="student-details">
          <div><strong>Спец:</strong> ${student.specialty}</div>
          <div><strong>Курс:</strong> ${student.course}</div>
          <div><strong>Средний балл:</strong> ${student.gpa}</div>
          <div><strong>Email:</strong> ${student.email}</div>
        </div>

        <div class="student-actions">
          <button class="small-btn edit" data-action="edit" data-id="${student.id}">${t('editStudent')}</button>
          <button class="small-btn delete" data-action="delete" data-id="${student.id}">${t('deleteStudent')}</button>
        </div>
      </article>
    `;
  }).join('');

  studentsList.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const action = event.currentTarget.dataset.action;
      const id = Number(event.currentTarget.dataset.id);

      if (action === 'edit') {
        openStudentModal(id);
      }

      if (action === 'delete') {
        deleteStudent(id);
      }
    });
  });
}

function renderGroups() {
  const groups = getGroups();
  const groupList = document.getElementById('groupList');
  const groupCountBadge = document.getElementById('groupCountBadge');
  const studentCountByGroup = getStudents().reduce((acc, student) => {
    acc[student.group] = (acc[student.group] || 0) + 1;
    return acc;
  }, {});

  if (groupCountBadge) {
    groupCountBadge.textContent = `${groups.length} ${t('groupCountSuffix')}`;
  }

  if (groupList) {
    groupList.innerHTML = groups.map((group) => `
      <div class="group-item">
        <div>
          <strong>${group}</strong>
          <span>${studentCountByGroup[group] || 0} ${t('groupPeopleSuffix')}</span>
        </div>
        <span class="badge">${group}</span>
      </div>
    `).join('');
  }
}

function renderAdminUsers() {
  const table = document.getElementById('adminUsersTable');
  const users = getUsers();

  if (!table) return;

  table.innerHTML = users.map((user) => {
    const mainAdmin = isMainAdmin(user);
    const canRemove = state.activeUser && isMainAdmin(state.activeUser) && ['Admin', 'Manager'].includes(user.role) && !mainAdmin;
    const status = mainAdmin ? t('mainAdmin') : user.role === 'Admin' ? t('adminAccess') : t('adminReady');
    const action = canRemove
      ? `<button class="table-action danger-action" data-remove-admin="${user.id}">${t('removeAdmin')}</button>`
      : '<span class="table-muted">—</span>';

    return `
      <tr>
        <td>${user.name}</td>
        <td>${getRoleLabel(user.role)}</td>
        <td>${user.email}</td>
        <td>${status}</td>
        <td>${action}</td>
      </tr>
    `;
  }).join('');

  table.querySelectorAll('[data-remove-admin]').forEach((button) => {
    button.addEventListener('click', () => removeAdmin(Number(button.dataset.removeAdmin)));
  });
}

async function removeAdmin(userId) {
  const users = getUsers();
  const user = users.find((item) => item.id === userId);

  if (!user || !isMainAdmin(state.activeUser) || !['Admin', 'Manager'].includes(user.role) || isMainAdmin(user)) {
    window.alert(t('cannotRemoveMainAdmin'));
    return;
  }

  if (!window.confirm(t('confirmRemoveAdmin'))) return;

  await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  databaseData.users = databaseData.users.filter((item) => item.id !== userId);
  renderAdminUsers();
}

function renderProfile() {
  const user = state.activeUser;
  const profileName = document.getElementById('profileName');

  if (!profileName) return;

  if (!user) {
    profileName.textContent = t('profileGuest');
    return;
  }

  const students = getStudents();
  const initials = user.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();

  const profileAvatar = document.getElementById('profileAvatar');
  profileAvatar.textContent = user.avatar ? '' : initials;
  profileAvatar.style.backgroundImage = user.avatar ? `url("${user.avatar}")` : '';
  profileAvatar.classList.toggle('has-image', Boolean(user.avatar));
  profileName.textContent = user.name;
  document.getElementById('profileRole').textContent = getRoleLabel(user.role);
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileStudentCount').textContent = String(students.length);
  document.getElementById('profileLastLogin').textContent = localStorage.getItem(STORAGE_KEYS.lastLogin) || t('profileNoData');
}

function renderAll() {
  renderStats();
  renderFilters();
  renderStudents();
  renderGroups();
  renderAdminUsers();
  renderProfile();
  updateAccessControl();
}

function openAuthModal() {
  const authModal = document.getElementById('authModal');
  if (authModal) authModal.classList.remove('hidden');
}

function closeAuthModal() {
  const authModal = document.getElementById('authModal');
  if (authModal) authModal.classList.add('hidden');
}

function setAuthMode(mode) {
  state.authMode = mode;
  document.querySelectorAll('.switch-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.auth === mode);
  });

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  if (loginForm) loginForm.classList.toggle('active-auth-form', mode === 'login');
  if (registerForm) registerForm.classList.toggle('active-auth-form', mode === 'register');
}

async function handleLogin(event) {
  event.preventDefault();
  const enteredEmail = document.getElementById('loginEmail').value.trim().toLowerCase();
  const email = enteredEmail === 'admin' ? 'admin@college.ru' : enteredEmail;
  const password = document.getElementById('loginPassword').value.trim();
  const error = document.getElementById('loginError');

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const user = response.ok ? await response.json() : null;

  if (!user) {
    error.textContent = t('invalidCredentials');
    return;
  }

  setCurrentUser(user);
  closeAuthModal();
  document.getElementById('loginForm').reset();
  toggleAuthScreen();
  renderAll();
  showView('dashboard');
}

async function handleLandingRegister(event) {
  event.preventDefault();
  const name = document.getElementById('landingName').value.trim();
  const email = document.getElementById('landingEmail').value.trim();
  const password = document.getElementById('landingPassword').value.trim();
  const role = document.getElementById('landingRole').value;
  const error = document.getElementById('landingError');

  if (!name || !email || !password) {
    error.textContent = t('fillAllFields');
    return;
  }

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  if (!response.ok) {
    error.textContent = t('userExists');
    return;
  }

  const user = await response.json();
  databaseData.users.push(user);
  setCurrentUser(user);
  document.getElementById('landingRegisterForm').reset();
  error.textContent = '';
  toggleAuthScreen();
  renderAll();
}

async function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const role = document.getElementById('registerRole').value;
  const error = document.getElementById('registerError');

  if (!name || !email || !password) {
    error.textContent = t('fillAllFields');
    return;
  }

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  if (!response.ok) {
    error.textContent = t('userExists');
    return;
  }

  const user = await response.json();
  databaseData.users.push(user);
  setCurrentUser(user);
  closeAuthModal();
  document.getElementById('registerForm').reset();
  toggleAuthScreen();
  renderAll();
  showView('dashboard');
}

function openStudentModal(studentId = null) {
  if (!studentId && !isAdmin()) {
    window.alert(t('adminOnlyStudentCreate'));
    return;
  }

  const modal = document.getElementById('studentModal');
  const title = document.getElementById('studentModalTitle');
  const studentForm = document.getElementById('studentForm');

  state.editingStudentId = studentId;
  title.textContent = studentId ? t('editStudent') : t('studentModalAdd');
  studentForm.reset();

  if (studentId) {
    const student = getStudents().find((item) => item.id === studentId);
    if (!student) return;
    document.getElementById('studentFirstName').value = student.firstName;
    document.getElementById('studentLastName').value = student.lastName;
    document.getElementById('studentEmail').value = student.email;
    document.getElementById('studentPhone').value = student.phone;
    document.getElementById('studentGroup').value = student.group;
    document.getElementById('studentSpecialty').value = student.specialty;
    document.getElementById('studentCourse').value = student.course;
    document.getElementById('studentStatus').value = student.status;
    document.getElementById('studentGpa').value = student.gpa;
    document.getElementById('studentAddress').value = student.address;
    document.getElementById('studentNotes').value = student.notes;
  }

  document.getElementById('studentFormError').textContent = '';
  modal.classList.remove('hidden');
}

function closeStudentModal() {
  const studentModal = document.getElementById('studentModal');
  if (studentModal) studentModal.classList.add('hidden');
  state.editingStudentId = null;
  document.getElementById('studentForm').reset();
}

function validateStudentForm(formData) {
  const required = ['firstName', 'lastName', 'email', 'phone', 'group', 'specialty', 'course', 'status', 'gpa', 'address'];
  for (const field of required) {
    if (!formData[field]) {
      return field === 'gpa' ? t('gpaRequired') : t('requiredMessage');
    }
  }
  return '';
}

async function saveStudent(event) {
  event.preventDefault();

  if (!state.editingStudentId && !isAdmin()) {
    window.alert(t('adminOnlyStudentCreate'));
    return;
  }

  const payload = {
    firstName: document.getElementById('studentFirstName').value.trim(),
    lastName: document.getElementById('studentLastName').value.trim(),
    email: document.getElementById('studentEmail').value.trim(),
    phone: document.getElementById('studentPhone').value.trim(),
    group: document.getElementById('studentGroup').value,
    specialty: document.getElementById('studentSpecialty').value,
    course: Number(document.getElementById('studentCourse').value),
    status: document.getElementById('studentStatus').value,
    gpa: Number(document.getElementById('studentGpa').value),
    address: document.getElementById('studentAddress').value.trim(),
    notes: document.getElementById('studentNotes').value.trim()
  };

  const error = validateStudentForm(payload);
  const message = document.getElementById('studentFormError');

  if (error) {
    message.textContent = error;
    return;
  }

  if (state.editingStudentId) {
    await api().updateStudent(state.editingStudentId, payload);
  } else {
    await api().addStudent(payload);
  }

  closeStudentModal();
  renderAll();
}

async function deleteStudent(studentId) {
  const canDelete = state.activeUser && ['Admin', 'Manager'].includes(state.activeUser.role);
  if (!canDelete) {
    window.alert(t('adminOnlyAction'));
    return;
  }

  if (!window.confirm(t('confirmDelete'))) return;
  await api().deleteStudent(studentId);
  renderAll();
}

async function handleGroupCreate(event) {
  event.preventDefault();
  const name = document.getElementById('groupNameInput').value.trim();
  if (!name) return;
  await api().addGroup(name);
  document.getElementById('groupForm').reset();
  renderAll();
}

async function handleSpecialtyCreate(event) {
  event.preventDefault();
  const name = document.getElementById('specialtyNameInput').value.trim();
  if (!name) return;
  await api().addSpecialty(name);
  document.getElementById('specialtyForm').reset();
  renderAll();
}

function bindEvents() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const viewName = button.dataset.view;
      if (viewName === 'admin' && !(state.activeUser?.role === 'Admin' || state.activeUser?.role === 'Manager')) {
        return;
      }
      showView(viewName);
    });
  });

  const openLoginBtn = document.getElementById('openLoginBtn');
  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', () => {
      setAuthMode('login');
      openAuthModal();
    });
  }

  const openRegisterBtn = document.getElementById('openRegisterBtn');
  if (openRegisterBtn) {
    openRegisterBtn.addEventListener('click', () => {
      setAuthMode('register');
      openAuthModal();
    });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      clearCurrentUser();
      toggleAuthScreen();
      renderAll();
      showView('dashboard');
    });
  }

  document.querySelectorAll('.switch-btn').forEach((button) => {
    button.addEventListener('click', () => setAuthMode(button.dataset.auth));
  });

  document.querySelectorAll('.close-modal')[0]?.addEventListener('click', () => closeAuthModal());
  document.querySelectorAll('.close-modal')[1]?.addEventListener('click', () => closeStudentModal());

  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  document.getElementById('landingRegisterForm')?.addEventListener('submit', handleLandingRegister);
  document.getElementById('landingRole')?.addEventListener('change', () => {});
  document.getElementById('openLoginFromLanding')?.addEventListener('click', () => {
    setAuthMode('login');
    openAuthModal();
  });

  document.getElementById('studentForm')?.addEventListener('submit', saveStudent);
  document.getElementById('groupForm')?.addEventListener('submit', handleGroupCreate);
  document.getElementById('specialtyForm')?.addEventListener('submit', handleSpecialtyCreate);

  document.getElementById('searchInput')?.addEventListener('input', (event) => {
    state.search = event.target.value;
    renderStudents();
  });

  document.getElementById('groupFilter')?.addEventListener('change', (event) => {
    state.groupFilter = event.target.value;
    renderStudents();
  });

  document.getElementById('specialtyFilter')?.addEventListener('change', (event) => {
    state.specialtyFilter = event.target.value;
    renderStudents();
  });

  document.getElementById('statusFilter')?.addEventListener('change', (event) => {
    state.statusFilter = event.target.value;
    renderStudents();
  });

  document.getElementById('sortSelect')?.addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderStudents();
  });

  document.getElementById('addStudentBtn')?.addEventListener('click', () => openStudentModal());
  document.getElementById('addStudentFromDashboard')?.addEventListener('click', () => openStudentModal());

  document.getElementById('avatarInput')?.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file || !state.activeUser) return;

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const users = getUsers();
      const updatedUser = { ...state.activeUser, avatar: reader.result };
      const updatedUsers = users.map((user) => user.id === updatedUser.id ? updatedUser : user);
      fetch(`/api/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar: updatedUser.avatar })
      }).then(async (response) => {
        const savedUser = await response.json();
        databaseData.users = databaseData.users.map((user) => user.id === savedUser.id ? savedUser : user);
        setCurrentUser(savedUser);
      });
      renderProfile();
    });
    reader.readAsDataURL(file);
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll('.theme-btn').forEach((button) => {
    button.addEventListener('click', () => setTheme(button.dataset.theme));
  });
}

async function init() {
  await seedData();
  bindEvents();
  setAuthMode('login');
  setLanguage(state.lang);
  setTheme(state.theme);
  renderAll();
  toggleAuthScreen();
}

window.addEventListener('DOMContentLoaded', init);
