# Rick and Morty API Web App

Welcome to the Rick and Morty API Web App, where you can explore data from the beloved show Rick and Morty! 🚀🌌

| https://rickandmortyapi.com/ |

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnA1NWVnNXgzY283ejZoZ3ZheGpqMm1qN2xkYnFxZDJ4Y29tYXV3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xuO1siCT147FrG/giphy.gif" alt="GIF Rick and Mory">
</p>

## 🛠️ Getting Started

To get started, follow these simple steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/t19d/astro-rickmorty-api.git
```

2. Navigate to the project folder:

```bash
cd astro-rickmorty-api
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Now, your Rick and Morty API Web App is up and running locally! 🌟

## 📄 Project Structure

Here's an overview of the project structure:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── characters/
│   │   │   └── CardCharacter.tsx
│   │   │   └── DetailsCharacter.tsx
│   │   │   └── GridCharacters.tsx
│   │   │   └── StatusSpecie.tsx
│   │   └── common/
│   │       └── Header.astro
│   │       └── Pagination.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── models/
│   │   └── api.model.ts
│   ├── pages/
│   │   ├── characters/
│   │   │   └── [id].astro
│   │   └── 404.astro
│   │   └── characters.astro
│   │   └── episodes.astro
│   │   └── index.astro
│   │   └── locations.astro
│   ├── services/
│   │   └── api.service.ts
│   └── stores/
│       └── characters.store.ts
├── .gitignore
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

The app uses Astro to look for .astro files in the src/pages/ directory, which are exposed as routes based on their file names. The src/components/ directory is where we keep our Astro components.

Any static assets, like images, can be placed in the public/ directory.

## 🚀 Commands

Here are some useful commands for managing your Rick and Morty API Web App:
| Command | Action |
| :------------------------ | :----------------------------------------------- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI |
