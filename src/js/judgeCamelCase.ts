export const judgeCamelCase = (str: string, judge: string) => {
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === judge[j] && j < judge.length) {
      j++
    }
  }
  console.log(j == judge.length)

  return j == judge.length
}
