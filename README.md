# WALKER UI

This is a UI Components library.

## Login into npm using the following command

```sh
npm login
```

## Setup environment

Create a `.env` file and copy all the content from `.env.example`.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile, and Minify for Production

```sh
npm run build
```

### Lint with **Prettier**

```sh
npm run format
```

### Lint with **ESLint**

```sh
npm run lint:fix
```

### Type checks

```sh
npm run type-checks
```

The project already has `husky` and `pre-commit` set up, which will trigger when you try to make a commit.

## Steps to publish new versions

1. Merge your branch to `main` with the updated `dist/` folder.
2. Run the following commands depending on the changes:

### Publish major changes

```sh
npm run release:major
```

### Publish minor changes

```sh
npm run release:minor
```

### Publish patch changes

```sh
npm run release:patch
```
