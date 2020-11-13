const vals = [
  'log', 'debug', 'trace', 'warn', 'info', 'error'
]
const levels = {}
vals.forEach(level => {
  levels[level.toUpperCase()] = level
})

export default levels
