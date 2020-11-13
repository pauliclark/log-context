import log from './index.js'
log.info('Sample info log')
log.log('Sample log log')
log.warn('Sample warn log')
log.trace(new Error('Sample trace log'))
log.error(new Error('Sample error log'))
