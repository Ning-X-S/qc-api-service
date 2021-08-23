const router = require('koa-router')()
const pageController = require('./controller/page-controller')

// 服务探活
router.get('/', (ctx) => {
  ctx.body = {
    'error_code': 0,
    'message': 'Hello',
    'data': {}
  }
})

router.post('/pages', pageController.createPage)

module.exports = router
