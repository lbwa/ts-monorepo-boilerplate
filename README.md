<h1 align="center">TS Monorepo Boilerplate</h1>

[wiki-monorepo]: https://en.wikipedia.org/wiki/Monorepo

Build a [monorepo][wiki-monorepo] project based on `TypeScript` as soon as possible.

## Features

- 100% TypeScript support

  Every package has own `tsconfig.json` for better compatibility

- Multiple JS environments (`browser`, `nodejs`) in the same monorepo

- Unit test integration based on `jest`

- Best practices for project management

  - Code formatter based on `prettier`, `lint-staged`

  - Code linter based on `eslint` (for `*.js`) and `typescript-eslint` (for `*.ts`)

  - Git hooks based on `husky`

## Unit tests

Support all [jest cli options](https://jestjs.io/docs/en/cli).

- run all `browser side only` unit tests

  ```bash
  $ yarn run test:browser
  # or yarn run test
  # or npm t
  ```

- run all `server side only` unit tests

  ```bash
  $ yarn run test:server
  # or npm run test:server
  ```

## License

MIT @ [Bowen Liu](https://github.com/lbwa)
