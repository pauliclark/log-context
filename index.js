import levels from './levels.js'
const op = {}
Object.values(levels).forEach(level => {
  op[level] = (...args) => {
    console[level](...args)
  }
})
export const contextLog = contextName => {
  Object.values(levels).forEach(level => {
    const op = {}
    op[level] = (...args) => {
      console[level](contextName.toUpperCase(), ...args)
    }
  })
  return op
}
export default op
