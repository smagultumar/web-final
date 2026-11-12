// ==============================
// MARWIN WEBSITE - JAVASCRIPT
// ==============================

const languageNames = { en: "EN", ru: "RU", kk: "KZ" };
const translations = {
  "Home": ["Главная", "Басты бет"], "Shop": ["Магазин", "Дүкен"], "About": ["О нас", "Біз туралы"], "Contact": ["Контакты", "Байланыс"], "Profile": ["Профиль", "Профиль"],
  "Marwin — Books, toys and more": ["Marwin — книги, игрушки и не только", "Marwin — кітаптар, ойыншықтар және тағы басқалар"], "Shop — Marwin": ["Магазин — Marwin", "Дүкен — Marwin"], "About Marwin": ["О Marwin", "Marwin туралы"], "Contact Marwin": ["Контакты — Marwin", "Marwin байланысы"], "Sign in — Marwin": ["Вход — Marwin", "Кіру — Marwin"], "My profile — Marwin": ["Мой профиль — Marwin", "Менің профилім — Marwin"],
  "Marwin · Astana": ["Marwin · Астана", "Marwin · Астана"], "More than": ["Больше, чем", "Кітап дүкенінен де"], "a": ["", ""], "bookshop": ["книжный магазин", "кең"], "Books, toys, stationery and sweets — a little bit of everything for your day.": ["Книги, игрушки, канцтовары и сладости — всё нужное в одном месте.", "Кітаптар, ойыншықтар, кеңсе тауарлары мен тәттілер — күнделікті қажеттінің бәрі."],
  "Shop all": ["Смотреть товары", "Тауарларды көру"], "About Marwin": ["О Marwin", "Marwin туралы"], "Find something for everyone": ["Найдётся что-то для каждого", "Әркімге керегін табуға болады"], "A good place": ["У нас можно", "Бізде"], "to browse": ["выбрать покупку", "таңдау жасауға болады"], "A bit of everything": ["Всего понемногу", "Әр нәрседен бар"], "Shop by": ["Покупки по", "Санат бойынша"], "category": ["категориям", "таңдау"], "Books": ["Книги", "Кітаптар"], "Stories and ideas": ["Истории и идеи", "Әңгімелер мен идеялар"], "Toys": ["Игрушки", "Ойыншықтар"], "Playtime favourites": ["Для весёлых игр", "Ойынға арналған"], "Stationery": ["Канцтовары", "Кеңсе тауарлары"], "Things for school and work": ["Для учёбы и работы", "Оқу мен жұмысқа"], "Sweets": ["Сладости", "Тәттілер"], "A little treat": ["Небольшое угощение", "Шағын тәтті"],
  "Around the store": ["В магазине", "Дүкенде"], "Popular": ["Популярное", "Танымал тауарлар"], "right now": ["сейчас", "қазір"], "See everything": ["Смотреть всё", "Барлығын көру"], "The Little Prince": ["Маленький принц", "Кішкентай ханзада"], "Book · Antoine de Saint-Exupéry": ["Книга · Антуан де Сент-Экзюпери", "Кітап · Антуан де Сент-Экзюпери"], "Soft Teddy Bear": ["Мягкий мишка", "Жұмсақ қонжық"], "Toy · Soft and cuddly": ["Игрушка · мягкий и приятный", "Ойыншық · жұмсақ әрі сүйкімді"], "A5 Notebook": ["Блокнот A5", "A5 дәптері"], "Lined pages": ["В линейку", "Жолды беттер"], "Milk Chocolate": ["Молочный шоколад", "Сүтті шоколад"], "Sweets · 90 g": ["Сладость · 90 г", "Тәтті · 90 г"],
  "A good book can make": ["Хорошая книга может", "Жақсы кітап"], "an ordinary day feel different.": ["изменить обычный день.", "кәдімгі күнді өзгерте алады."], "From Google Books": ["Из Google Books", "Google Books ұсынған"], "Book picks from Open Library": ["Книги из Open Library", "Open Library кітаптары"], "Something": ["Что-то", "Оқуға арналған"], "new": ["новое", "жаңа"], "to read": ["для чтения", ""], "Try another set ↻": ["Обновить подборку ↻", "Басқа кітаптарды көру ↻"], "Loading a few books...": ["Загружаем книги…", "Кітаптар жүктелуде…"], "Occasional book news": ["Новости о книгах", "Кітап жаңалықтары"], "Notes from": ["Новости от", "Жаңалықтар"], "Marwin": ["Marwin", "Marwin"], "New books and a few reading ideas, sent once in a while.": ["Новые книги и идеи для чтения — иногда присылаем самое интересное.", "Жаңа кітаптар мен оқу идеялары — анда-санда жіберіп тұрамыз."], "Email address": ["Электронная почта", "Электрондық пошта"], "Sign me up": ["Подписаться", "Жазылу"], "Books, toys and more.": ["Книги, игрушки и не только.", "Кітаптар, ойыншықтар және тағы басқалар."], "© 2026 Marwin · Astana": ["© 2026 Marwin · Астана", "© 2026 Marwin · Астана"],
  "Books, toys and more": ["Книги, игрушки и не только", "Кітаптар, ойыншықтар және тағы басқалар"], "Browse the store by category, or search for something specific.": ["Выберите категорию или найдите конкретный товар.", "Санатты таңдаңыз немесе нақты тауарды іздеңіз."], "⌕": ["⌕", "⌕"], "Everything": ["Все товары", "Барлық тауар"], "Books, gifts and everyday finds.": ["Книги, подарки и товары на каждый день.", "Кітаптар, сыйлықтар және күнделікті тауарлар."], "Take a look": ["Посмотрите", "Тауарларды қараңыз"], "Shop": ["Магазин", "Дүкен"], "Browse the store": ["Перейти в магазин", "Дүкенге өту"], "About us": ["О магазине", "Дүкен туралы"], "More than": ["Больше, чем", "Кітап дүкенінен де"], "Marwin is a store in Astana with books, toys, stationery and sweets. It is a handy place to pick up a gift or something for yourself.": ["Marwin в Астане — это книги, игрушки, канцтовары и сладости. Здесь можно выбрать подарок или что-нибудь для себя.", "Астанадағы Marwin дүкенінде кітаптар, ойыншықтар, кеңсе тауарлары мен тәттілер бар. Сыйлықты немесе өзіңізге қажет затты таба аласыз."], "Browse the store →": ["Перейти в магазин →", "Дүкенге өту →"], "A little bit": ["Всего понемногу", "Әр нәрседен"], "of everything": ["", "бар"], "Books, toys, stationery and sweets in one place.": ["Книги, игрушки, канцтовары и сладости в одном месте.", "Кітаптар, ойыншықтар, кеңсе тауарлары мен тәттілер бір жерде."], "For everyday needs": ["Для повседневных дел", "Күнделікті қажетке"], "Pick up a notebook, a small gift or a treat.": ["Выберите блокнот, небольшой подарок или сладость.", "Дәптер, шағын сыйлық немесе тәтті таңдаңыз."], "A local store": ["Магазин в Астане", "Астанадағы дүкен"], "Visit us in Astana and take a look around.": ["Заходите к нам в Астане и выбирайте покупки.", "Астанаға келіп, дүкенімізді аралап көріңіз."], "The people behind the project": ["Команда проекта", "Жоба командасы"], "Meet our": ["Наша", "Біздің"], "team": ["команда", "команда"], "We are the team behind the Marwin website.": ["Мы — команда, которая создала сайт Marwin.", "Біз — Marwin сайтын жасаған командамыз."], "Team member": ["Участник команды", "Топ мүшесі"], "Group": ["Группа", "Топ"], "Have a look": ["Загляните", "Қарап көріңіз"], "Find something": ["Найдите что-нибудь", "Өзіңізге бір нәрсе"], "for your day.": ["на каждый день.", "табыңыз."], "Shop all categories →": ["Смотреть все категории →", "Барлық санатты көру →"],
  "Get in touch": ["Свяжитесь с нами", "Бізбен байланысыңыз"], "us": ["", ""], "Have a question about a book? Send us a note.": ["Есть вопрос о товаре? Напишите нам.", "Тауар туралы сұрағыңыз бар ма? Бізге жазыңыз."], "Send a message": ["Отправить сообщение", "Хабарлама жіберу"], "Your name": ["Ваше имя", "Атыңыз"], "Email": ["Электронная почта", "Электрондық пошта"], "Phone": ["Телефон", "Телефон"], "Message": ["Сообщение", "Хабарлама"], "Send message": ["Отправить", "Жіберу"], "Visit the store": ["Наш адрес", "Дүкен мекенжайы"], "Come and": ["Приходите", "Келіңіз"], "have a look.": ["и выбирайте.", "және таңдап алыңыз."], "Address": ["Адрес", "Мекенжай"], "MEGA shopping centre": ["Торговый центр MEGA", "MEGA сауда орталығы"], "Astana, Kazakhstan": ["Астана, Казахстан", "Астана, Қазақстан"], "Opening hours": ["Часы работы", "Жұмыс уақыты"], "Every day": ["Ежедневно", "Күн сайын"], "hello@marwin.kz": ["hello@marwin.kz", "hello@marwin.kz"], "Need a book tip?": ["Нужен совет по выбору?", "Таңдауға кеңес керек пе?"], "Ask us in store.": ["Спросите нас в магазине.", "Дүкенде бізден сұраңыз."],
  "Your Marwin account": ["Ваш аккаунт Marwin", "Marwin аккаунтыңыз"], "Keep your": ["Сохраняйте", "Таңдаулы тауарларды"], "favourite books": ["любимые товары", "бірге"], "close.": ["под рукой.", "сақтаңыз."], "Good reads": ["Хорошие покупки", "Жақсы таңдау"], "start here": ["начинаются здесь", "осы жерден басталады"], "Sign in": ["Войти", "Кіру"], "Sign up": ["Регистрация", "Тіркелу"], "Welcome back": ["С возвращением", "Қайта келгеніңізге қуаныштымыз"], "Sign in to see your saved books.": ["Войдите, чтобы увидеть избранные товары.", "Таңдаулы тауарларды көру үшін кіріңіз."], "Password": ["Пароль", "Құпиясөз"], "Create an account": ["Создать аккаунт", "Аккаунт ашу"], "Save books you want to read later.": ["Сохраняйте товары, которые хотите посмотреть позже.", "Кейін көргіңіз келетін тауарларды сақтаңыз."], "Name": ["Имя", "Аты"], "Demo account details stay in this browser.": ["Данные демо-аккаунта хранятся в этом браузере.", "Демо-аккаунт деректері осы браузерде сақталады."],
  "Your account": ["Ваш аккаунт", "Аккаунтыңыз"], "My": ["Мой", "Менің"], "profile": ["профиль", "профилім"], "Your list": ["Ваш список", "Тізіміңіз"], "Saved": ["Избранные", "Таңдаулы"], "items": ["товары", "тауарлар"], "Browse the store": ["Перейти в магазин", "Дүкенге өту"],
  "Stories and ideas": ["Истории и идеи", "Әңгімелер мен идеялар"], "No products found. Try another search.": ["Ничего не найдено. Попробуйте другой запрос.", "Ештеңе табылмады. Басқа сөзбен іздеп көріңіз."], "products": ["товаров", "тауар"], "No saved items yet. Visit the catalogue and tap ♡ to save something.": ["Здесь пока пусто. Откройте каталог и нажмите ♡, чтобы сохранить товар.", "Әзірге бос. Тауарды сақтау үшін каталогтан ♡ белгісін басыңыз."], "You are not signed in": ["Вы не вошли в аккаунт", "Аккаунтқа кірмедіңіз"], "Sign in or create an account to see your profile.": ["Войдите или создайте аккаунт, чтобы увидеть профиль.", "Профильді көру үшін кіріңіз немесе аккаунт ашыңыз."], "Phone: ": ["Телефон: ", "Телефон: "], "Not added": ["не указан", "көрсетілмеген"], "Marwin reader": ["Покупатель Marwin", "Marwin тұтынушысы"], "Sign out ↗": ["Выйти ↗", "Шығу ↗"],
  "Please enter your email and password.": ["Введите электронную почту и пароль.", "Электрондық пошта мен құпиясөзді енгізіңіз."], "Please enter a valid email address.": ["Введите корректный адрес электронной почты.", "Электрондық пошта мекенжайын дұрыс енгізіңіз."], "Incorrect email or password. Try again or create an account.": ["Неверная почта или пароль. Проверьте данные или зарегистрируйтесь.", "Пошта немесе құпиясөз қате. Қайта көріңіз немесе тіркеліңіз."], "Please fill in all fields.": ["Заполните все поля.", "Барлық өрісті толтырыңыз."], "Please enter a valid phone number with at least 10 digits.": ["Введите корректный номер телефона (не менее 10 цифр).", "Кемінде 10 саннан тұратын телефон нөмірін енгізіңіз."], "Password must have at least 8 characters, one uppercase letter, one lowercase letter and one number.": ["Пароль должен содержать не менее 8 символов, заглавную и строчную буквы и цифру.", "Құпиясөзде кемінде 8 таңба, бас және кіші әріп, сан болуы керек."], "An account with this email already exists. Please sign in.": ["Аккаунт с такой почтой уже есть. Войдите.", "Бұл поштаға аккаунт тіркелген. Кіріңіз."], "Thank you! Your message has been saved.": ["Спасибо! Сообщение сохранено.", "Рақмет! Хабарлама сақталды."], "Thanks for signing up!": ["Спасибо за подписку!", "Жазылғаныңызға рақмет!"], "Loading books...": ["Загружаем книги…", "Кітаптар жүктелуде…"], "Untitled book": ["Книга без названия", "Атаусыз кітап"], "Unknown author": ["Автор не указан", "Авторы белгісіз"], "No cover available": ["Обложка недоступна", "Мұқабасы жоқ"], "Could not load books right now. Please try again later.": ["Не удалось загрузить книги. Попробуйте позже.", "Кітаптарды жүктеу мүмкін болмады. Кейінірек көріңіз."],
  "The Little Prince": ["Маленький принц", "Кішкентай ханзада"], "Pride and Prejudice": ["Гордость и предубеждение", "Тәкаппарлық пен жаңсақ пікір"], "Thinking, Fast and Slow": ["Думай медленно… решай быстро", "Баяу ойла, жылдам шеш"], "Dune": ["Дюна", "Дюна"], "Soft Teddy Bear": ["Мягкий плюшевый мишка", "Жұмсақ ойыншық қонжық"], "Wooden Building Blocks": ["Деревянный конструктор", "Ағаш құрастырғыш"], "A5 Notebook": ["Блокнот A5", "A5 дәптері"], "Colour Pen Set": ["Набор цветных ручек", "Түрлі түсті қаламдар жиынтығы"], "Milk Chocolate": ["Молочный шоколад", "Сүтті шоколад"], "Fruit Gummies": ["Фруктовый мармелад", "Жеміс мармелады"],
  "Antoine de Saint-Exupéry": ["Антуан де Сент-Экзюпери", "Антуан де Сент-Экзюпери"], "Jane Austen": ["Джейн Остин", "Джейн Остин"], "Daniel Kahneman": ["Дэниел Канеман", "Дэниел Канеман"], "Frank Herbert": ["Фрэнк Герберт", "Фрэнк Герберт"], "Plush toy": ["Плюшевая игрушка", "Жұмсақ ойыншық"], "Wooden toy": ["Деревянная игрушка", "Ағаш ойыншық"], "Sweet treat": ["Сладость", "Тәтті"], "Soft toys": ["Мягкие игрушки", "Жұмсақ ойыншықтар"], "For ages 3+": ["Для детей от 3 лет", "3 жастан бастап"], "Lined · 120 pages": ["В линейку · 120 страниц", "Жолды · 120 бет"], "Set of 12": ["12 штук", "12 дана"], "Chocolate · 90 g": ["Шоколад · 90 г", "Шоколад · 90 г"], "Fruit flavour · 150 g": ["Фруктовый вкус · 150 г", "Жеміс дәмі · 150 г"], "No books found. Try another search.": ["Ничего не найдено. Попробуйте другой запрос.", "Ештеңе табылмады. Басқа сөзбен іздеп көріңіз."], "No saved books yet. Tap ♡ in the catalogue to add one.": ["В избранном пока пусто. Нажмите ♡ в каталоге, чтобы добавить товар.", "Таңдаулы тізім бос. Тауар қосу үшін каталогтан ♡ белгісін басыңыз."], "No saved items yet. Visit the catalogue and tap ♡ to save something.": ["В избранном пока пусто. Откройте каталог и нажмите ♡, чтобы сохранить товар.", "Таңдаулы тізім бос. Тауар сақтау үшін каталогтағы ♡ белгісін басыңыз."], "Books and more": ["Книги и не только", "Кітаптар және тағы басқалар"], "Save book": ["Сохранить товар", "Тауарды сақтау"], "Search products": ["Поиск товаров", "Тауарларды іздеу"], "Open menu": ["Открыть меню", "Мәзірді ашу"], "Switch colour theme": ["Сменить тему", "Тақырыпты ауыстыру"], "Search products…": ["Поиск товаров…", "Тауарларды іздеу…"], "Search books or authors…": ["Название книги или автор…", "Кітап атауы немесе авторы…"], "Try again ↻": ["Попробовать снова ↻", "Қайта көру ↻"], "Google Books is unavailable. Showing results from Open Library.": ["Google Books сейчас недоступен. Показываем книги из Open Library.", "Google Books қолжетімсіз. Open Library кітаптарын көрсетіп жатырмыз."], "Could not load books right now. Please try again later.": ["Не удалось загрузить книги. Проверьте интернет и попробуйте снова.", "Кітаптарды жүктеу мүмкін болмады. Интернетті тексеріп, қайта көріңіз."]
};

function currentLanguage() {
  return localStorage.getItem("marwin-language") || "en";
}

function translateText(text, language = currentLanguage()) {
  const pair = translations[text];
  if (!pair || language === "en") return text;
  return pair[language === "ru" ? 0 : 1] ?? text;
}

function translatePage(language = currentLanguage()) {
  document.documentElement.lang = language === "kk" ? "kk" : language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    node._marwinOriginal ??= node.textContent;
    const original = node._marwinOriginal.trim();
    if (!original) continue;
    const translated = translateText(original, language);
    const start = node._marwinOriginal.search(/\S|$/);
    const end = node._marwinOriginal.search(/\s*$/);
    node.textContent = node._marwinOriginal.slice(0, start) + translated + node._marwinOriginal.slice(end);
  }
  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(input => {
    input.dataset.originalPlaceholder ||= input.placeholder;
    input.placeholder = translateText(input.dataset.originalPlaceholder, language);
  });
  document.querySelectorAll("[aria-label]").forEach(item => {
    item.dataset.originalLabel ||= item.getAttribute("aria-label");
    item.setAttribute("aria-label", translateText(item.dataset.originalLabel, language));
  });
  document.querySelectorAll("img[alt]").forEach(image => {
    image.dataset.originalAlt ||= image.alt;
    image.alt = translateText(image.dataset.originalAlt, language);
  });
  const page = location.pathname.split("/").pop() || "index.html";
  const titles = { "index.html": "Marwin — Books, toys and more", "catalog.html": "Shop — Marwin", "about.html": "About Marwin", "contact.html": "Contact Marwin", "login.html": "Sign in — Marwin", "profile.html": "My profile — Marwin" };
  document.title = translateText(titles[page] || titles["index.html"], language);
  const picker = document.querySelector("#language-picker");
  if (picker) picker.value = language;
}

function addLanguagePicker() {
  const actions = document.querySelector(".header-actions");
  if (!actions || document.querySelector("#language-picker")) return;
  const picker = document.createElement("select");
  picker.id = "language-picker";
  picker.className = "language-picker";
  picker.setAttribute("aria-label", "Language / Язык / Тіл");
  Object.entries(languageNames).forEach(([code, name]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = name;
    picker.append(option);
  });
  actions.prepend(picker);
  picker.addEventListener("change", () => {
    localStorage.setItem("marwin-language", picker.value);
    showCatalog();
    showSavedBooks();
    showProfile();
    loadBooks();
    translatePage(picker.value);
  });
}

addLanguagePicker();
translatePage();

// Product data
const BOOKS = [
  {
    id: "prince",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Books",
    price: "3 290 ₸",
    image: "img/TheLittlePrince.jpg"
  },
  {
    id: "pride",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Books",
    price: "4 590 ₸",
    image: "img/PrideandPrejudice.jpg"
  },
  {
    id: "think",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Books",
    price: "6 990 ₸",
    image: "img/ThinkingFastandSlow.jpg"
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Books",
    price: "5 990 ₸",
    image: "img/Dune.jpg"
  },
  {
    id: "toy-bear",
    title: "Soft Teddy Bear",
    author: "Plush toy",
    genre: "Toys",
    price: "5 990 ₸",
    image: "img/TeddyBear.jpg"
  },
  {
    id: "toy-blocks",
    title: "Wooden Building Blocks",
    author: "Wooden toy",
    genre: "Toys",
    price: "7 490 ₸",
    image: "img/BuildingBlocks.jpg"
  },
  {
    id: "notebook",
    title: "A5 Notebook",
    author: "Stationery",
    genre: "Stationery",
    price: "1 490 ₸",
    image: "img/Notebook.jpg"
  },
  {
    id: "pens",
    title: "Colour Pen Set",
    author: "Stationery",
    genre: "Stationery",
    price: "2 290 ₸",
    image: "img/ColourPens.jpg"
  },
  {
    id: "chocolate",
    title: "Milk Chocolate",
    author: "Sweet treat",
    genre: "Sweets",
    price: "990 ₸",
    image: "img/Chocolate.jpg"
  },
  {
    id: "gummy",
    title: "Fruit Gummies",
    author: "Sweet treat",
    genre: "Sweets",
    price: "1 190 ₸",
    image: "img/Gummies.jpg"
  }
];


// ==============================
// HELPER FUNCTIONS
// ==============================

function one(selector, parent = document) {
  return parent.querySelector(selector);
}

function all(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function readData(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, function (character) {
    const characters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return characters[character];
  });
}

function showMessage(form, text, isError = false) {
  const message = one(".form-message", form);

  if (!message) return;

  message.textContent = translateText(text);
  message.classList.toggle("error", isError);
}


// ==============================
// FORM VALIDATION
// ==============================

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function passwordIsValid(password) {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

function phoneIsValid(phone) {
  const numbers = phone.replace(/\D/g, "");

  return /^[+0-9\s()-]+$/.test(phone) && numbers.length >= 10;
}


// ==============================
// LIGHT / DARK MODE
// ==============================

function setTheme() {
  const isDark = localStorage.getItem("marwin-theme") === "dark";

  document.body.classList.toggle("dark", isDark);

  all(".theme-toggle").forEach(function (button) {
    button.textContent = isDark ? "☀" : "☾";
  });
}

setTheme();

all(".theme-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    const newTheme = document.body.classList.contains("dark")
      ? "light"
      : "dark";

    localStorage.setItem("marwin-theme", newTheme);
    setTheme();
  });
});


// ==============================
// MOBILE MENU
// ==============================

const menuButton = one(".menu-toggle");
const navigation = one(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
  });
}


// ==============================
// PRODUCT CARDS
// ==============================

function makeBookCard(book) {
  const savedBooks = readData("marwin-saved", []);
  const isSaved = savedBooks.includes(book.id);
  const title = translateText(book.title);
  const author = translateText(book.author);

  return `
    <article class="book-card">
      <div class="cover">
        <img
          class="product-image"
          src="${book.image}"
          alt="${escapeHTML(title)}"
        >

        <button
          class="save-book ${isSaved ? "saved" : ""}"
          data-save="${book.id}"
          aria-label="${escapeHTML(translateText("Save book"))}: ${escapeHTML(title)}"
        >
          ${isSaved ? "♥" : "♡"}
        </button>
      </div>

      <div class="book-meta">
        <div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(author)}</p>
        </div>

        <b>${book.price}</b>
      </div>
    </article>
  `;
}


// ==============================
// SAVED ITEMS
// ==============================

function addSaveEvents(parent = document) {
  all("[data-save]", parent).forEach(function (button) {
    button.addEventListener("click", function () {
      let savedBooks = readData("marwin-saved", []);
      const bookId = button.dataset.save;

      if (savedBooks.includes(bookId)) {
        savedBooks = savedBooks.filter(function (id) {
          return id !== bookId;
        });
      } else {
        savedBooks.push(bookId);
      }

      localStorage.setItem(
        "marwin-saved",
        JSON.stringify(savedBooks)
      );

      button.classList.toggle(
        "saved",
        savedBooks.includes(bookId)
      );

      button.textContent = savedBooks.includes(bookId)
        ? "♥"
        : "♡";

      showSavedBooks();
    });
  });
}


// ==============================
// CATALOGUE SEARCH AND FILTER
// ==============================

function showCatalog() {
  const grid = one("#catalog-grid");

  if (!grid) return;

  const searchInput = one("#book-search");
  const selectedFilter = one(".filter-chip.selected");

  const searchText = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const genre = selectedFilter
    ? selectedFilter.dataset.genre
    : "All";

  const matches = BOOKS.filter(function (book) {
    const text =
      `${book.title} ${translateText(book.title)} ${book.author} ${translateText(book.author)} ${book.genre}`
        .toLowerCase();

    const matchesSearch = text.includes(searchText);
    const matchesGenre =
      genre === "All" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  if (matches.length > 0) {
    grid.innerHTML = matches.map(makeBookCard).join("");
  } else {
    grid.innerHTML =
      `<p class="empty-results">${escapeHTML(translateText("No products found. Try another search."))}</p>`;
  }

  const count = one("#catalog-count");

  if (count) {
    const countText = currentLanguage() === "ru" ? "товаров" : currentLanguage() === "kk" ? "тауар" : "products";
    count.textContent = `${matches.length} ${countText}`;
  }

  addSaveEvents(grid);
}

if (one("#catalog-grid")) {
  showCatalog();

  const searchInput = one("#book-search");

  if (searchInput) {
    searchInput.addEventListener("input", showCatalog);
  }

  all(".filter-chip").forEach(function (button) {
    button.addEventListener("click", function () {
      all(".filter-chip").forEach(function (chip) {
        chip.classList.remove("selected");
      });

      button.classList.add("selected");
      showCatalog();
    });
  });
}


// ==============================
// PROFILE SAVED ITEMS
// ==============================

function showSavedBooks() {
  const grid = one("#saved-books");

  if (!grid) return;

  const savedIds = readData("marwin-saved", []);

  const savedProducts = BOOKS.filter(function (book) {
    return savedIds.includes(book.id);
  });

  if (savedProducts.length > 0) {
    grid.innerHTML = savedProducts
      .map(makeBookCard)
      .join("");
  } else {
    grid.innerHTML =
      `<p class="empty-results">${escapeHTML(translateText("No saved items yet. Visit the catalogue and tap ♡ to save something."))}</p>`;
  }

  addSaveEvents(grid);
}

showSavedBooks();


// ==============================
// PROFILE
// ==============================

function showProfile() {
  const profile = one("#profile-content");

  if (!profile) return;

  const user = readData("marwin-user", null);
  const session = localStorage.getItem("marwin-session");

  if (
    !user ||
    !session ||
    session.toLowerCase() !== user.email.toLowerCase()
  ) {
    profile.innerHTML = `
      <div>
      <h2>${escapeHTML(translateText("You are not signed in"))}</h2>
      <p>${escapeHTML(translateText("Sign in or create an account to see your profile."))}</p>
      </div>

      <a class="button button-dark" href="login.html">
        ${escapeHTML(translateText("Sign in"))} →
      </a>
    `;

    return;
  }

  const firstLetter = user.name
    ? user.name.charAt(0).toUpperCase()
    : "M";

  profile.innerHTML = `
    <div class="profile-person">
      <div class="profile-avatar">${escapeHTML(firstLetter)}</div>

      <div>
        <h2>${escapeHTML(user.name)}</h2>
        <p>${escapeHTML(user.email)}</p>
      </div>
    </div>

    <div class="profile-details">
      <span>${escapeHTML(translateText("Phone: "))}${escapeHTML(user.phone || translateText("Not added"))}</span>
      <span>${escapeHTML(translateText("Marwin reader"))}</span>
    </div>

    <button class="button" id="logout">
      ${escapeHTML(translateText("Sign out ↗"))}
    </button>
  `;

  const logoutButton = one("#logout");

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("marwin-session");
      window.location.href = "index.html";
    });
  }
}

showProfile();


// ==============================
// LOGIN AND SIGN UP
// ==============================

const loginForm = one("#login-form");
const signupForm = one("#signup-form");

all(".auth-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    all(".auth-tab").forEach(function (button) {
      button.classList.toggle(
        "active",
        button === tab
      );
    });

    if (loginForm) {
      loginForm.classList.toggle(
        "hidden",
        tab.dataset.tab !== "login"
      );
    }

    if (signupForm) {
      signupForm.classList.toggle(
        "hidden",
        tab.dataset.tab !== "signup"
      );
    }
  });
});

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email =
      loginForm.elements.email.value.trim();

    const password =
      loginForm.elements.password.value;

    if (!email || !password) {
      showMessage(
        loginForm,
        "Please enter your email and password.",
        true
      );

      return;
    }

    if (!emailIsValid(email)) {
      showMessage(
        loginForm,
        "Please enter a valid email address.",
        true
      );

      return;
    }

    const user = readData("marwin-user", null);

    if (
      !user ||
      user.email.toLowerCase() !== email.toLowerCase() ||
      user.password !== password
    ) {
      showMessage(
        loginForm,
        "Incorrect email or password. Try again or create an account.",
        true
      );

      return;
    }

    localStorage.setItem(
      "marwin-session",
      email
    );

    window.location.href = "profile.html";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
      signupForm.elements.name.value.trim();

    const email =
      signupForm.elements.email.value.trim();

    const phone =
      signupForm.elements.phone.value.trim();

    const password =
      signupForm.elements.password.value;

    if (!name || !email || !phone || !password) {
      showMessage(
        signupForm,
        "Please fill in all fields.",
        true
      );

      return;
    }

    if (!emailIsValid(email)) {
      showMessage(
        signupForm,
        "Please enter a valid email address.",
        true
      );

      return;
    }

    if (!phoneIsValid(phone)) {
      showMessage(
        signupForm,
        "Please enter a valid phone number with at least 10 digits.",
        true
      );

      return;
    }

    if (!passwordIsValid(password)) {
      showMessage(
        signupForm,
        "Password must have at least 8 characters, one uppercase letter, one lowercase letter and one number.",
        true
      );

      return;
    }

    const existingUser = readData(
      "marwin-user",
      null
    );

    if (
      existingUser &&
      existingUser.email.toLowerCase() === email.toLowerCase()
    ) {
      showMessage(
        signupForm,
        "An account with this email already exists. Please sign in.",
        true
      );

      return;
    }

    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password
    };

    localStorage.setItem(
      "marwin-user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "marwin-session",
      email
    );

    window.location.href = "profile.html";
  });
}


// ==============================
// CONTACT FORM
// ==============================

const contactForm = one("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
      contactForm.elements.name.value.trim();

    const email =
      contactForm.elements.email.value.trim();

    const phone =
      contactForm.elements.phone.value.trim();

    const message =
      contactForm.elements.message.value.trim();

    if (!name || !email || !phone || !message) {
      showMessage(
        contactForm,
        "Please fill in all fields.",
        true
      );

      return;
    }

    if (!emailIsValid(email)) {
      showMessage(
        contactForm,
        "Please enter a valid email address.",
        true
      );

      return;
    }

    if (!phoneIsValid(phone)) {
      showMessage(
        contactForm,
        "Please enter a valid phone number.",
        true
      );

      return;
    }

    localStorage.setItem(
      "marwin-contact-draft",
      JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message
      })
    );

    showMessage(
      contactForm,
      "Thank you! Your message has been saved."
    );

    contactForm.reset();
  });
}


// ==============================
// NEWSLETTER
// ==============================

const newsletterForm = one("#newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();

      const emailInput =
        one("#newsletter-email");

      const email =
        emailInput.value.trim();

      if (!emailIsValid(email)) {
        showMessage(
          newsletterForm,
          "Please enter a valid email address.",
          true
        );

        return;
      }

      const emails = readData(
        "marwin-newsletter",
        []
      );

      if (!emails.includes(email)) {
        emails.push(email);
      }

      localStorage.setItem(
        "marwin-newsletter",
        JSON.stringify(emails)
      );

      showMessage(
        newsletterForm,
        "Thanks for signing up!"
      );

      newsletterForm.reset();
    }
  );
}


// ==============================
// GOOGLE BOOKS API
// ==============================

let booksRequestId = 0;

async function loadBooks() {
  const section = one("#api-books");

  if (!section) return;

  const requestId = ++booksRequestId;

  section.innerHTML =
    `<p class="loading">${escapeHTML(translateText("Loading books..."))}</p>`;

  async function getJson(url) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error("Book service request failed");
      return await response.json();
    } finally {
      window.clearTimeout(timer);
    }
  }

  try {
    const data = await getJson("https://openlibrary.org/search.json?q=subject:fiction&limit=30&fields=title,author_name,cover_i");
    const candidates = (data.docs || []).filter(book => book.cover_i).slice(0, 12).map(book => ({
      title: book.title || translateText("Untitled book"),
      author: book.author_name ? book.author_name.slice(0, 2).join(", ") : translateText("Unknown author"),
      image: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    }));

    const checkedBooks = await Promise.all(candidates.map(book => new Promise(resolve => {
      const cover = new Image();
      const timer = window.setTimeout(() => resolve(null), 6000);
      cover.onload = () => {
        window.clearTimeout(timer);
        resolve(cover.naturalWidth >= 80 && cover.naturalHeight >= 80 ? book : null);
      };
      cover.onerror = () => {
        window.clearTimeout(timer);
        resolve(null);
      };
      cover.src = book.image;
    })));
    const books = checkedBooks.filter(Boolean).slice(0, 4);
    if (!books.length) throw new Error("No books with working covers");

    if (requestId !== booksRequestId) return;
    section.innerHTML = '<div class="api-books-grid">' + books.map(book => {
      const safeTitle = escapeHTML(book.title);
      const safeAuthor = escapeHTML(book.author);
      return `<article class="book-card api-book"><div class="cover"><img class="product-image" src="${escapeHTML(book.image)}" alt="${safeTitle}"></div><div class="book-meta"><div><h3>${safeTitle}</h3><p>${safeAuthor}</p></div></div></article>`;
    }).join("") + "</div>";

    section.querySelectorAll(".api-book .cover img").forEach(image => {
      image.addEventListener("error", function () {
        image.closest(".api-book").remove();
      }, { once: true });
    });
  } catch {
    if (requestId !== booksRequestId) return;
    section.innerHTML = `<div class="api-failure"><p class="api-error">${escapeHTML(translateText("Could not load books right now. Please try again later."))}</p><button class="button button-outline" id="api-retry">${escapeHTML(translateText("Try again ↻"))}</button></div>`;
    one("#api-retry", section).addEventListener("click", loadBooks);
  }
}

loadBooks();

const refreshButton = one("#refresh-books");

if (refreshButton) {
  refreshButton.addEventListener(
    "click",
    loadBooks
  );
}
