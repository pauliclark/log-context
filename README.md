# log-context

*NOTE: This package has only been written for ES Modules.*

Coloured and Contextual console log

```
  import {
    levels,
    log,
    contextLog
  } from '@pauliclark/log-context'

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

```
  import { contextLog } from '@pauliclark/log-context'

  const myLog = contextLog('My context name')

  myLog.log('my context log message')
  myLog.debug('my context debug message')
  myLog.info('my context info message')
  myLog.trace('my context trace message')
  myLog.warn('my context warn message')
  myLog.error('my context error message')

```

## Setting the log level

```
  import {
    levels,
    log
  } from '@pauliclark/log-context'

  log.setLogLevel(levels.TRACE)
```

Setting the log level to trace above, the methods for 'log', 'debug' and 'info' will be ignored.
The same method is also available in context logs.

## Set the colours and padding

```
  import {log, colours, styles, backgrounds} from '@pauliclark/log-context'

  log.styles.log = [styles.reset, colours.green, backgrounds.white ]
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
  import {log} from '@pauliclark/log-context'

  log.styles.context = [styles.bold, colours.white, backgrounds.red ]
```

Available colours / backgrounds are:

 - black
 - red
 - green
 - yellow
 - blue
 - magenta
 - cyan
 - white
 - gray
 - grey
 - brightRed
 - brightGreen
 - brightYellow
 - brightBlue
 - brightMagenta
 - brightCyan
 - brightWhite

Available styles are:

 - reset
 - bold
 - dim
 - italic
 - underline
 - inverse
 - hidden
 - strikethrough
 