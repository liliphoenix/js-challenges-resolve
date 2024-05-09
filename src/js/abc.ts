export const replaceABC = (str: string) => {
  const stack: any[] = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'b') continue
    if (
      (str[i] === 'a' && str[stack.length - 1] === 'c') ||
      (str[i] === 'c' && str[stack.length - 1] === 'a')
    ) {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  console.log(stack.join(''))
}
