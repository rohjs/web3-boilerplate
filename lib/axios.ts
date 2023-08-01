import axios from 'axios'
import memoize from 'memoize-one'

const axiosInstance = memoize(() =>
  axios.create({
    baseURL: process.env.BACKEND_API_HOSTNAME,
    timeout: 20 * 1_000,
  })
)()

export default axiosInstance
