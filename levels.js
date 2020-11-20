const keys = [
  'log', 'debug', 'info', 'trace', 'warn', 'error'
]
const levels = {}
keys.forEach(level => {
  levels[level.toUpperCase()] = level
})

export {
  levels,
  keys
}
export default levels
