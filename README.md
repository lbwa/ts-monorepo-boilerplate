<h1 align="center">TS Monorepo Boilerplate</h1>

[wiki-monorepo]: https://en.wikipedia.org/wiki/Monorepo

Build a [monorepo][wiki-monorepo] project based on [TypeScript](https://github.com/microsoft/TypeScript/#readme) as soon as possible.

<!-- TOC -->

- [Features](#features)
- [Development](#development)
- [Production](#production)
- [Unit tests](#unit-tests)
- [License](#license)

<!-- /TOC -->

## Features

- 100% `TypeScript` support

  Every package has own [tsconfig.json](https://www.typescriptlang.org/tsconfig) for better compatibility

- Integrate with [babeljs](https://babel.dev)

- Multiple JS environments (`browser`, `nodejs`) in the same monorepo

- Unit test integration based on [jest](https://github.com/facebook/jest)

- Best practices for project management

  - Code formatter based on [prettier](https://github.com/prettier/prettier), [lint-staged](https://github.com/okonet/lint-staged)

  - Code linter based on [eslint](https://github.com/eslint/eslint) (for `JavaScript` files) and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) (for `TypeScript` files)

  - Git hooks based on [husky](https://github.com/typicode/husky)

## Development

- run with [TS compiler watch mode](https://www.typescriptlang.org/docs/handbook/configuring-watch.html).

  ```bash
  $ yarn run watch
  ```

## Production

> The entire production build is based on [babeljs](https://babel.dev), you can modify [babel options](https://babel.dev/docs/en/options) in the [configs/babel.config.js](./configs/babel.config.js) if necessary.

- All output files will place in `packages/*/dist` folder.

  ```bash
  $ yarn run build
  ```

## Unit tests

Support all [jest cli options](https://jestjs.io/docs/en/cli).

- run all unit tests

  ```bash
  $ yarn run test
  ```

- run all unit tests with watch mode

  ```bash
  $ yarn run test:watch
  ```

- run all unit tests with coverage

  ```bash
  $ yarn run test:ci
  ```

## License

MIT @ [Bowen Liu](https://github.com/lbwa)
