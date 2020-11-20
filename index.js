import { keys, levels } from './levels.js'
// eslint-disable-next-line no-unused-vars
import colors from 'colors'
import { colours, backgrounds, styles } from './colours.js'
const defaultLevelStyles = {
  log: [styles.reset, colours.gray],
  debug: [styles.reset, colours.cyan],
  info: [styles.reset, colours.blue],
  trace: [styles.reset, colours.gray],
  warn: [styles.reset, colours.yellow],
  error: [styles.reset, colours.red]
}
const op = {}
Object.values(levels).forEach(level => {
  op[level] = (...args) => {
    console[level](...args)
  }
})
class Log {
  constructor (context = null, logLevel = keys[0]) {
    this.context = context
    this.logLevel = logLevel
    this.styles = {
      context: [styles.bold, backgrounds.blue, colours.brightWhite]
    }
    keys.forEach(level => {
      this.styles[level] = defaultLevelStyles[level]
    })
    keys.forEach(level => {
      const styleString = (str) => {
        const styles = [...(this.styles[level] || [])]
        while (styles.length) str = str ? str[styles.pop()] : ''
        return str
      }
      this[level] = function (...args) {
        const cargs = []
        while (args.length) {
          const arg = args.pop()
          if (arg && arg.message) {
            cargs.unshift(...[styleString(arg.message), arg])
          } else if (typeof arg !== 'string') {
            cargs.unshift(arg)
          } else {
            cargs.unshift(styleString(arg))
          }
        }
        let contextName = this.context ? ` ${this.context.toUpperCase()} ` : null
        if (this.context) {
          const styles = [...(this.styles.context || [])]
          while (styles.length) contextName = contextName[styles.pop()]
        }

        if (keys.indexOf(level) >= keys.indexOf(this.logLevel)) {
          if (this.context) {
            console[level](contextName, ...cargs)
          } else {
            console[level](...cargs)
          }
        }
      }
    })
  }

  setLogLevel (logLevel = keys[0]) {
    if (!keys.includes(logLevel)) throw new Error('Not a valid log level')
    this.logLevel = logLevel
  }
}

const contextLog = (context, logLevel) => {
  return new Log(context, logLevel)
}
const baseLog = new Log()
const log = baseLog
export {
  levels,
  log,
  contextLog,
  colours, backgrounds, styles
}
export default baseLog
