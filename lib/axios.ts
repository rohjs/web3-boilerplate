import axios from 'axios'
import memoize from 'memoize-one'

import { baseUrls } from 'config/api'

const axiosInstance = memoize(() =>
  axios.create({
    baseURL: baseUrls.server,
    timeout: 20 * 1_000,
  })
)()

export default axiosInstance
