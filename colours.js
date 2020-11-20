const vals = {
  colours: [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray',
    'grey',
    'brightRed',
    'brightGreen',
    'brightYellow',
    'brightBlue',
    'brightMagenta',
    'brightCyan',
    'brightWhite'
  ],
  backgrounds: [
    'bgBlack',
    'bgRed',
    'bgGreen',
    'bgYellow',
    'bgBlue',
    'bgMagenta',
    'bgCyan',
    'bgWhite',
    'bgGray',
    'bgGrey',
    'bgBrightRed',
    'bgBrightGreen',
    'bgBrightYellow',
    'bgBrightBlue',
    'bgBrightMagenta',
    'bgBrightCyan',
    'bgBrightWhite'
  ],
  styles: [
    'reset',
    'bold',
    'dim',
    'italic',
    'underline',
    'inverse',
    'hidden',
    'strikethrough'
  ]
}
const colours = {}
vals.colours.forEach(v => { colours[v] = v })
const backgrounds = {}
vals.backgrounds.forEach(v => { backgrounds[v.replace(/^bg/, '').replace(/^[A-Z]/, s => s.toLowerCase())] = v })
const styles = {}
vals.styles.forEach(v => { styles[v] = v })
export {
  colours,
  backgrounds,
  styles
}
