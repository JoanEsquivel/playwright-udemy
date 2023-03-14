# Playwright Udemy

Project to teach Playwright from scratch.

## Requisites & installation process

1. Install Node
2. Clone this repository
3. Install dependencies using: `npm install`
4. You are ready to go.

## Run ESLint

Open a terminal to the root of your project and run the following command:
```npx eslint .```

## Run prettier
Open a terminal to the root of your project and run the following command:
``` npx prettier --write . ```

## For Git Hooks
1. Install Husky after cloning this project using: ``` npx husky install ```
2. Then: ``` npx husky add .husky/pre-commit "npx lint-staged" ```
3. Now, when you commit a change your changes will be audited.