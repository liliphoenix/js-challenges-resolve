export const isoscelesTriangle = (floor: any) => {
  for (let i = 0; i < floor; i++) {
    for (let j = floor - i - 1; j > 0; j--) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      process.stdout.write('*')
    }

    console.log('\t')
  }
}
