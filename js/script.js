// ==============================
// MARWIN WEBSITE - JAVASCRIPT
// ==============================

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

  message.textContent = text;
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

  return `
    <article class="book-card">
      <div class="cover">
        <img
          class="product-image"
          src="${book.image}"
          alt="${escapeHTML(book.title)}"
        >

        <button
          class="save-book ${isSaved ? "saved" : ""}"
          data-save="${book.id}"
          aria-label="Save ${escapeHTML(book.title)}"
        >
          ${isSaved ? "♥" : "♡"}
        </button>
      </div>

      <div class="book-meta">
        <div>
          <h3>${escapeHTML(book.title)}</h3>
          <p>${escapeHTML(book.author)}</p>
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
      `${book.title} ${book.author} ${book.genre}`
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
      '<p class="empty-results">No products found. Try another search.</p>';
  }

  const count = one("#catalog-count");

  if (count) {
    count.textContent = `${matches.length} products`;
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
      '<p class="empty-results">No saved items yet. Visit the catalogue and tap ♡ to save something.</p>';
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
        <h2>You are not signed in</h2>
        <p>Sign in or create an account to see your profile.</p>
      </div>

      <a class="button button-dark" href="login.html">
        Sign in →
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
      <span>Phone: ${escapeHTML(user.phone || "Not added")}</span>
      <span>Marwin reader</span>
    </div>

    <button class="button" id="logout">
      Sign out ↗
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

async function loadBooks() {
  const section = one("#api-books");

  if (!section) return;

  section.innerHTML =
    '<p class="loading">Loading books...</p>';

  try {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&maxResults=4&printType=books";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("No books found");
    }

    section.innerHTML =
      '<div class="api-books-grid">' +
      data.items.map(function (item) {
        const book = item.volumeInfo || {};

        const title =
          book.title || "Untitled book";

        const authors =
          book.authors
            ? book.authors.join(", ")
            : "Unknown author";

        let image =
          book.imageLinks &&
            book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : "";

        image = image.replace(
          "http:",
          "https:"
        );

        const safeTitle =
          escapeHTML(title);

        const safeAuthors =
          escapeHTML(authors);

        return `
          <article class="book-card api-book">
            <div class="cover">
              ${image
            ? `<img class="product-image" src="${image}" alt="${safeTitle}">`
            : `<div class="no-image">No cover available</div>`
          }
            </div>

            <div class="book-meta">
              <div>
                <h3>${safeTitle}</h3>
                <p>${safeAuthors}</p>
              </div>
            </div>
          </article>
        `;
      }).join("") +
      "</div>";

  } catch (error) {
    section.innerHTML =
      '<p class="api-error">Could not load books right now. Please try again later.</p>';
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