const Redis = require('ioredis')
const config = require('../../config').redis
const { error: GLSERROR } = require('../util')
let redis
if (process.env.NODE_ENV === 'development') {
  redis = new Redis(config)
} else {
  redis = new Redis.Cluster(config)
}

redis.on('error', (err) => {
  console.log(err)
  throw new GLSERROR.RedisOperationException(err.message)
})

module.exports = redis
