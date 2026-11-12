# Marwin — Multi-page responsive website

## Team
- Tumar Smagul
- Yermukan Zamira
- Kambarbek Zeine
- Group: SE-2510

## Pages
- `index.html` — home page and Google Books API recommendations
- `catalog.html` — product catalogue with live search, category filters and saved items
- `about.html` — about the store
- `contact.html` — validated contact form
- `login.html` — demo sign in and sign up
- `profile.html` — signed-in user profile and saved items

## Run locally
Open `index.html` in a browser. For the most reliable API testing, run a local static server from this folder, for example:

LiveServer in VS Code

## Main functionality
- Responsive layouts using CSS Grid and Flexbox.
- Light/dark theme saved in `localStorage` and shared across pages.
- English, Russian and Kazakh interface languages saved in `localStorage` and shared across pages.
- Demo account registration and login using `localStorage`.
- Client-side validation for required fields, email, phone and password complexity.
- Product search, category filtering and saved items.
- Google Books API integration with Open Library fallback, loading, error and retry states.
- Mobile navigation and hover transitions.

## Important demo limitation
Authentication is simulated in the browser. Account data (including the password) is stored in `localStorage`; this is suitable only for a coursework demonstration, not for a real production account system. A real website must use a secure backend and hashed passwords.

## Hosting
Deploy this folder to GitHub Pages, Netlify or Vercel. Submit the resulting public website URL and the Git repository URL separately. Hosting and repository publication require access to the team's account, so no live URL is included in this archive.
