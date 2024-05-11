export const removeEmptyProperties = (obj: any) => {
  for (let [key, value] of Object.entries(obj)) {
    if (value === '' || value === null || value === undefined) {
      delete obj[key]
    } else if (typeof value === 'object') {
      removeEmptyProperties(value)
    }
  }
  console.log(obj)
}
