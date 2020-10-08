// @ts-check
const childProcess = require('child_process')
const path = require('path')
const { promisify } = require('util')
const yargs = require('yargs')

/**
 * @param {string} p path string
 */
function resolveCurrent(p) {
  return path.resolve(__dirname, p)
}
const exec = promisify(childProcess.exec)
const bundleTypes = ['cjs', 'es']

async function run(argv) {
  const { bundle, outDir: relativeOutDir, verbose } = argv

  if (!bundleTypes.includes(bundle)) {
    throw new TypeError(
      `Unrecognized bundle '${bundle}', Did you one of "${bundleTypes.join(
        '", "'
      )}"?`
    )
  }

  const env = {
    ...process.env,
    NODE_ENV: 'production',
    BABEL_ENV: bundle
  }
  const babelConfigPath = resolveCurrent('../configs/babel.config.js')
  const srcDir = path.resolve('./src')
  const outDir = path.resolve(
    relativeOutDir,
    {
      cjs: 'cjs',
      es: 'es'
    }[bundle]
  )

  const command = [
    'npx babel',
    '--config-file',
    babelConfigPath,
    '--extensions',
    '".js,.ts,.tsx"',
    srcDir,
    '--out-dir',
    outDir,
    '--ignore',
    // Need to put these patterns in quotes otherwise they might be evaluated by the used terminal.
    `"${[
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/*.d.ts',
      '**/*/demo'
    ].join('","')}"`
  ].join(' ')

  if (verbose) {
    console.log(`running '${command}' with ${JSON.stringify(env)}`)
  }

  return exec(command, { env })
}

yargs
  .command({
    command: '$0 <bundle>',
    describe: 'build package',
    builder: (command) => {
      return command
        .positional('bundle', {
          description: `Valid bundles: "${bundleTypes.join('" | "')}"`,
          type: 'string'
        })
        .option('out-dir', { default: './dist', type: 'string' })
        .option('verbose', { type: 'boolean' })
    },
    handler: run
  })
  .help()
  .strict(true)
  .version(false)
  .parse()
