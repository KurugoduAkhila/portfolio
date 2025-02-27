# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Kurugodu Akhila Portfolio

A modern portfolio website for Computer Science Engineer Kurugodu Akhila.

## Features

- Responsive design
- Modern UI with animations
- Showcase of projects and skills
- Clean, minimalist design

## Live Demo

Visit the live portfolio at: [https://kurugoduakhila.github.io/portfolio](https://kurugoduakhila.github.io/portfolio)

## Setup Instructions

### Frontend Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Deployment Instructions

### Frontend Deployment to GitHub Pages

1. Create a GitHub repository named `portfolio`

2. Initialize Git in your project (if not already done):
   ```
   git init
   ```

3. Add your GitHub repository as remote:
   ```
   git remote add origin https://github.com/KurugoduAkhila/portfolio.git
   ```

4. Commit your changes:
   ```
   git add .
   git commit -m "Initial commit"
   ```

5. Push to GitHub:
   ```
   git push -u origin main
   ```

6. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Credits

- Design & Development: Kurugodu Akhila
- Technologies: React, TypeScript, Tailwind CSS
- Animations: Framer Motion
