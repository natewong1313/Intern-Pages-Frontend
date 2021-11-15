import axios from 'axios'
import getApiUrl from './getApiUrl'

const fetchPosts = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(getApiUrl() + '/posts')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default fetchPosts
