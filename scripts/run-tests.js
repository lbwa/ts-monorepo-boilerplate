const spawn = require('cross-spawn')
const chalk = require('chalk')

process.on('unhandledRejection', (err) => {
  throw err
})

const AVAILABLE_COMMANDS = ['browser', 'server'] // 2 kinds of js environments
const args = process.argv.slice(2)
const isValidCommand = (arg) => AVAILABLE_COMMANDS.includes(arg)
const scriptIndex = args.findIndex(isValidCommand)
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []

process.env.TEST_ENV = script

if (isValidCommand(script)) {
  const result = spawn.sync(
    'jest',
    nodeArgs.concat(args.slice(scriptIndex + 1)),
    { stdio: 'inherit' }
  )
  if (result.signal) {
    console.info(chalk.yellow('Unexpected process exited'))
    process.exit(1)
  }
} else {
  console.error(chalk.red(`Unknown script ${script}`))
  process.exit(1)
}
