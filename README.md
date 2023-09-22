# Nuxt 3 - Vuetify - TypeScript Project

## Tech Stack

- Sql Server
- Nuxt 3
- Vuetify
- TypeScript

## Prerequisites

- [Node.js - v16.10.0 or newer](https://nodejs.org/en)
- [Text Editor - VS Code recommended](https://code.visualstudio.com/)
- [Github Repo for your project](https://github.com/)
- [git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/get-docker/)

## Recommended Extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Docker Docs](https://docs.docker.com/)

## Local Setup
````bash
# Create a new starter project
npx nuxi@latest init <project-name>

# Open the project with VS Code
code <project-name>

# Clone the repo
git clone <repo-url>

# Install the dependencies
npm install

# Add TypeScript support
npm install --save-dev typescript

## Add Vuetify to the project
npm i vuetify@next

## Install sass, fonts, and icons as dev dependencies
npm i -D sass nuxt-icon @nuxtjs/google-fonts

# Install Vuetify plugin for Vite
npm i vite-plugin-vuetify

# Build and run the production container
docker compose up --build

# Build and run the development container
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
````

## File Structure
````bash 

nuxt-3-proj/
├─ .nuxt/
├─ .output/
├─ .vscode/
├─ layouts/
│  ├─ baseline.vue
├─ node_modules/
├─ pages/
│  ├─ contact/
│  │  ├─ contact.vue
│  ├─ index.vue
├─ plugins/
│  ├─ vuetify.js
├─ public/
│  ├─ favicon.ico
├─ server/
│  ├─ tsconfig.json
├─ .dockerignore
├─ .env
├─ .gitignore
├─ .npmrc
├─ .docker-compose.dev.yml
├─ .docker-compose.yml
├─ Dockerfile
├─ Dockerfile.dev
├─ nuxt-3-proj.code-workspace
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ settings.scss
├─ tsconfig.json
````

## Documentation

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vuetifyjs documentation](https://vuetifyjs.com/en/)
- [Materialize documentation](https://materializecss.com/)
- [Google Fonts for Nuxt 3](https://google-fonts.nuxtjs.org/getting-started/setup)
- [TypeScript](https://www.typescriptlang.org/docs/)
