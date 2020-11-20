import {
  levels,
  log,
  contextLog
} from '../index.js'
// eslint-disable-next-line no-unused-vars
import { jest } from '@jest/globals'
const contextName = 'testlog'
const testLog = contextLog(contextName)
const testMessage = 'this is a test log message'
beforeEach(() => {
  Object.keys(levels).forEach(level => {
    console[levels[level]] = jest.fn()
  })
})
Object.keys(levels).forEach(level => {
  test(`logs ${level} message`, () => {
    log[levels[level]](testMessage)
    expect(console[levels[level]].mock.calls.length).toBe(1)
    expect(console[levels[level]].mock.calls[0][0]).toContain(testMessage)
  })
})
Object.keys(levels).forEach(level => {
  test(`context log ${level} message`, () => {
    testLog[levels[level]](testMessage)
    expect(console[levels[level]].mock.calls.length).toBe(1)
    expect(console[levels[level]].mock.calls[0][0]).toContain(contextName.toUpperCase())
    expect(console[levels[level]].mock.calls[0][1]).toContain(testMessage)
  })
})

test(`log not performed if level below set level of ${levels.DEBUG}`, () => {
  log.setLogLevel(levels.DEBUG)
  log.debug(testMessage)
  log.log(testMessage)
  log.trace(testMessage)
  expect(console.debug.mock.calls.length).toBe(1)
  expect(console.log.mock.calls.length).toBe(0)
  expect(console.trace.mock.calls.length).toBe(1)
})
test(`log not performed if level below set level of ${levels.TRACE}`, () => {
  log.setLogLevel(levels.TRACE)
  log.debug(testMessage)
  log.warn(testMessage)
  log.trace(testMessage)
  expect(console.debug.mock.calls.length).toBe(0)
  expect(console.warn.mock.calls.length).toBe(1)
  expect(console.trace.mock.calls.length).toBe(1)
})
test('parse error', () => {
  log.error(new Error('Sample error log'))
  expect(console.error.mock.calls.length).toBe(1)
})
