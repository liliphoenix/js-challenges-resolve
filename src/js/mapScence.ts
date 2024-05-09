export const MapSense = () => {
  const arr = [
    {
      name: '可乐',
      categories: ['热门', '饮料']
    },
    {
      name: '苹果',
      categories: ['热门', '食物']
    },
    {
      name: '洗衣液',
      categories: ['生活用品']
    }
  ]
  let map = new Map()
  let res = []
  arr.forEach((item) => {
    item.categories.forEach((cat) => {
      const hasCat = map.has(cat)
      if (hasCat) {
        map.get(cat).push(item.name)
      } else {
        map.set(cat, [item.name])
      }
    })
  })

  for (let value of map) {
    res.push({
      name: value[0],
      categories: value[1]
    })
  }
  console.log(res)
}
