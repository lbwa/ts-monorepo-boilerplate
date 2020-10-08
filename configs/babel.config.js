let defaultPreset
// all available BABEL_ENV, NODE_ENV are placed in scripts/build.js
const babelEnv = process.env.BABEL_ENV

if (babelEnv === 'es') {
  defaultPreset = []
} else {
  defaultPreset = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: 'commonjs'
      }
    ]
  ]
}

const productionPlugins = []

module.exports = {
  presets: defaultPreset.concat(['@babel/preset-typescript']),
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
    '@babel/plugin-transform-object-assign'
  ],
  /**
   * will match envName(default: process.env.BABEL_ENV || process.env.NODE_ENV || "development")
   * @see https://babel.dev/docs/en/options#env
   * @see https://babel.dev/docs/en/options#envname
   */
  env: {
    cjs: {
      plugins: productionPlugins
    },
    es: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    },
    production: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    }
  }
}
