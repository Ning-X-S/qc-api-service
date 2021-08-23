const axios = require('axios')
const JSONBigInt = require('json-bigint')({ storeAsString: true })

axios.interceptors.response.use(res => {
  // 去掉外层的 data
  return Promise.resolve(res.data)
}, function (err) {
  return Promise.reject(err)
})

axios.defaults.transformResponse = [data => {
  return JSONBigInt.parse(data)
}]

module.exports = option => {
  const method = typeof option.method === 'string' ? option.method.toUpperCase() : 'GET'
  const data = option.params || option.data || {}
  const options = {
    headers: option.headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    url: option.url || '/',
    baseURL: option.baseURL,
    timeout: 2000,
    method,
    params: method === 'GET' ? data : {},
    data,
    ...option
  }
  return axios(options)
}
