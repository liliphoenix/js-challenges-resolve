export const myFetch = async (url: any, options: any) => {
  try {
    const res = await fetch(url, options)
    if (res.status === 200) {
      console.log('ok')
    }
  } catch (error: any) {
    console.log(error.message)
  }
}
