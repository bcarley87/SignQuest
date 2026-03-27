# SignQuest

A Duolingo-style ASL (American Sign Language) practice app built with React, Vite, and Tailwind CSS. Quiz yourself on the ASL alphabet and 101 common word signs.

## Features

- **Two quiz modes** — ASL to English (see a sign, pick the word) and English to ASL (see a word, pick the sign)
- **Three categories** — Alphabet, Common Words (101 signs), or Both
- **Lives toggle** — Practice with 3 lives or no lives at all
- **Configurable quiz length** — 5, 10, 20, or 30 questions
- Sign media (MP4 video + GIF) sourced from [lifeprint.com](https://www.lifeprint.com)

## Requirements

- [Node.js](https://nodejs.org) v18 or later
- npm (comes with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/bcarley87/SignQuest.git
   cd SignQuest
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The compiled output will be in the `dist/` folder and can be served with any static file host.

## Project Structure

```
SignQuest/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── HomeScreen.jsx   # Quiz configuration screen
│   │   ├── QuizScreen.jsx   # Active quiz screen
│   │   ├── ResultScreen.jsx # Results screen
│   │   └── SignImage.jsx    # Renders sign GIF or MP4
│   ├── data/
│   │   └── signs.js         # All sign data and quiz logic
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Credits

Sign media provided by [ASL University — lifeprint.com](https://www.lifeprint.com) by Dr. Bill Vicars.
