# log-context

*NOTE: This package has only been written for ES Modules.*

Coloured and Contextual console log

```
  import {
    levels,
    log,
    contextLog
  } from 'log-context'

  const myLog = contextLog('My context name')

  log.log('my log message')
  log.debug('my debug message')
  log.info('my info message')
  log.trace('my trace message')
  log.warn('my warn message')
  log.error('my error message')

  myLog.log('my context log message')
  myLog.debug('my context debug message')
  myLog.info('my context info message')
  myLog.trace('my context trace message')
  myLog.warn('my context warn message')
  myLog.error('my context error message')

```

## Creating a contextual log

Once a contextual log is created, the console messages will be printed prefixed with the contextual name.

## Setting the log level

```
  import {
    levels,
    log
  } from 'log-context'

  log.setLogLevel(levels.TRACE)
```

Setting the log level to trace above, the methods for 'log', 'debug' and 'info' will be ignored.
The same method is also available in context logs.

## Set the colours and padding

```
  import {log} from 'log-context'

  log.styles.log.background = 'red'
  log.styles.log.color = 'white'
  log.styles.log.padding = '1px'
```

The styles can be different for each of levels.

 - log
 - debug
 - info
 - trace
 - warn
 - error

The context name displayed can also be adjusted...

```
  import {log} from 'log-context'

  log.styles.context.background = 'red'
  log.styles.context.color = 'white'
```