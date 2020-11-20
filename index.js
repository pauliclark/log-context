import { keys, levels } from './levels.js'
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
      context: {
        background: 'black',
        color: 'white',
        padding: '1px 3px'
      }
    }
    keys.forEach(level => {
      this.styles[level] = {
        background: 'none',
        color: 'black',
        padding: '1px'
      }
    })
    keys.forEach(level => {
      this[level] = function (...args) {
        const cargs = []
        while (args.length) {
          const arg = args.pop()
          cargs.unshift(...((typeof arg === 'string') ? [`%c${arg}`, `background:${this.styles[level].background};color:${this.styles[level].color};padding:${this.styles[level].padding};`] : arg))
        }
        if (keys.indexOf(level) >= keys.indexOf(this.logLevel)) {
          if (this.context) {
            console[level](`%c${this.context.toUpperCase()}`, `background:${this.styles.context.background};color:${this.styles.context.color};padding:${this.styles.context.padding};`, ...cargs)
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
  contextLog
}
export default baseLog
