<h1 align="center">TS Monorepo Boilerplate</h1>

[wiki-monorepo]: https://en.wikipedia.org/wiki/Monorepo

Build a [monorepo][wiki-monorepo] project based on `TypeScript` as soon as possible.

## Features

- Multiple JS environments (`browser`, `nodejs`) in the same monorepo

- Unit test integration

- Basic project management (eg, code formatter, git hooks, etc.)

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
