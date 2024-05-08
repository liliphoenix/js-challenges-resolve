export const randomStr = (length: any) => {
  let arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  let ranStr: string = ''
  for (let i = 0; i < length; i++) {
    console.log(Math.floor(Math.random() * 27))

    ranStr += arr[Math.floor(Math.random() * 27)]
  }
  console.log(ranStr)
}
