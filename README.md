# Nuxt 3 - Vuetify - TypeScript Project

## Tech Stack
Azure VM with IIS 

Azure VM with Sql Server 
 
Nuxt 3
 
Vuetify
 
TypeScript
 

## Prerequisites
[Node.js - v16.10.0 or newer](hhttps://nodejs.org/en)
[Text Editor - VS Code recommended  ](https://code.visualstudio.com/)
[Text Editor - VS Code recommended  ](https://code.visualstudio.com/)
[Github Repo for your project](https://github.com/)
[git](https://git-scm.com/downloads)

## Recommended Extensions 
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
[Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
[Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)

## Setup

```bash
# Open teminal and navigate to where you want to create your project

# create a new starter project
npx nuxi@latest init <project-name>

#open the project with VS Code
code <project-name>

# Clone the repo
git clone

# install the dependencies
npm install

# add vuetifyjs to the project
npm i vuetify@next

# install sass, fonts, and icons as a dev dependency 
npm i -D sass nuxt-icon @nuxtjs/google-fonts

# install plugin
npm i vite-plugin-vuetify

# IIS setup
# Assuming you've installed IIS, else install via Windows features.
Import-Module WebAdministration
New-Website -Name "my-app" -Port 80 -PhysicalPath "C:\path\to\your\nuxt\app"

# iisnode for running Node apps on IIS
npm install iisnode
# Follow iisnode setup guide for IIS config

# Ensure Firewall Allows SQL and IIS
New-NetFirewallRule -DisplayName "Allow SQL" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 1433
New-NetFirewallRule -DisplayName "Allow IIS" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 80

# For Caching
npm install apicache

# Real-time with Socket.io
npm install socket.io socket.io-client

# Install Tedious for SQL Server
npm install tedious

# Testing with Jest
npm install --save-dev jest @vue/test-utils vue-jest

# Logging with Winston
npm install winston

# Monitoring with Sentry
npm install @sentry/node @sentry/tracing

# Start the development server 
npm run dev

# Open Chrome to `http://localhost:3000`:
```


## Create the following files & folders 



## Documentation
[Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)

[Vuetifyjs documentation](https://vuetifyjs.com/en/)

[Materialize documentation](https://materializecss.com/)

[google fonts for Nuxt 3]( https://google-fonts.nuxtjs.org/getting-started/setup)

[Type Script](https://www.typescriptlang.org/docs/)
