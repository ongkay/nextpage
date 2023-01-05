import apiTmdb from '../configs/apiTmdb'
import { getTime } from './getTime'

export const getData = async (url, option) => {
  try {
    console.log(`[${getTime()}] Fetching --> ${url}`)
    const endPoint = apiTmdb.baseUrl + url + apiTmdb.apiKey

    const response = option
      ? await fetch(endPoint, option)
      : await fetch(endPoint)

    if (response.status === 200) {
      let res = await response.json()
      let timeFetch = getTime().toString()
      const result = { ...res, timeFetch }
      // console.log(result)
      return result
    } else return undefined
  } catch (err) {
    console.log('fetching Erorrrrrrr --> ' + url)
    return undefined
  }
}

const fetchData = (url, type, revalidate = 100) => {
  return getData(url)
}

export default fetchData
