const { raven } = require('../util')

const env = process.env.NODE_ENV

module.exports = function () {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      raven.captureException(err, {
        level: err.level || (env === 'development' ? 'warning' : 'error')
      })
      let { message, status, code } = err
      ctx.status = status || 400

      ctx.body = {
        'error_code': code || 4231000,
        'message': message || '请求出错',
        'data': {}
      }
    }
  }
}
