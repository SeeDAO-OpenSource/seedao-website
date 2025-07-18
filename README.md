# SEEDAO Website v4

This is the official repository for the fourth version of the SEEDAO website, a decentralized autonomous organization (DAO) focused on building a global network of crypto nomads.

## Project Overview

The SEEDAO website is a single-page application (SPA) built with React and TypeScript. It serves as the main entry point for new members, providing information about the DAO's mission, values, and ongoing projects. The site is designed to be a welcoming and informative resource for anyone interested in joining the SEEDAO community.

## Tech Stack

- **React 18:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **React Router:** A declarative routing library for React.
- **Styled-components:** A CSS-in-JS library for styling React components.
- **i18next:** A popular internationalization framework for JavaScript.
- **React-scripts:** A set of scripts from Create React App for running and building the application.
- **ESLint & Prettier:** Tools for enforcing code quality and consistent formatting.

## Project Structure

The project follows a standard React application structure:

```
seedao-website-v4/
├── public/             # Static assets and index.html
├── src/
│   ├── assets/         # Images, fonts, and other static files
│   ├── components/     # Reusable React components
│   ├── locales/        # Translation files for i18n
│   ├── pages/          # Top-level page components
│   ├── styles/         # Global styles and theme
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Entry point of the application
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run the following commands:

### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes. You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Launches the test runner in interactive watch mode.

### `yarn format`

Formats the code using Prettier.

### `yarn lint`

Lints the code using ESLint.

### `yarn sitemap`

Generates a `sitemap.xml` file for the website.

### `yarn check-seo`

Checks the website for common SEO issues.

## Internationalization (i18n)

The website supports multiple languages using the i18next framework. Translation files are located in the `src/locales` directory.

- `en.json`: English translations
- `zh_CN.json`: Simplified Chinese translations

To contribute to the translations, please edit the appropriate JSON file and submit a pull request.
