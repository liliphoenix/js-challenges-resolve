export const primeNum = (num: any) => {
  if (num == 2 && num == 3) return true
  for (let i = 2; i <= Math.pow(num, 0.5); i++) {
    if (num % i == 0) {
      return true
    }
  }
  return false
}
