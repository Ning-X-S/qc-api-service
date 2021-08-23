const PageService = require('../service/page-service')

module.exports = {
  createPage
}

// 创建 Page
async function createPage(ctx, next) {
  /**
    * @api {post} /pages 创建页面
    * @apiName CreatePage
    * @apiGroup Page
    * @apiVersion 1.0.0
    * @apiPermission 登录用户
    * @apiParam {Number} tag_id 标签 ID
    * @apiSuccess {Number} page_id Page ID
    * @apiSuccess {Number} user_id 用户 ID
    * @apiSuccess {String} router_id 页面路由
    * @apiSuccess {Number} record_id 历史记录 ID
    * @apiSuccess {String} title 标题
    * @apiSuccess {String} goods_id 页面所有商品 ID
    * @apiSuccess {String} setting 页面设置
    * @apiSuccess {String} share_data 分享设置
    * @apiSuccessExample {json} Success-Response:
      {
        "error_code": 0,
        "message": "页面创建成功",
        "data": {
          "page_id": 3,
          "user_id": 5113,
          "router_id": "48a7042fd",
          "record_id": 9,
          "title": "吴思伦 的 GLS 页面",
          "goods_id": "[]",
          "setting": "{\"broadcast\":true,\"downloadbar\":true,\"couponbar\":true,\"sharebtn\":false,\"ending\":true,\"loadapp\":true}",
          "share_data": "{\"title\":\"吴思伦 的 GLS 页面\",\"link\":"",\"wxAppSwitch\":false,\"desc\":\"\",\"imgUrl\":""}"
        }
      }
    * @apiErrorExample {json} Error-Response:
      {
        "error_code": 1,
        "message": "登录过期，请重新登录",
        "data": {}
      }
  */

  let { id: userId, name: userName = 'qiuwenju' } = ctx.state.user

  let page = await PageService.createPage(ctx, userId, userName)
  ctx.body = {
    'error_code': 0,
    'message': '页面创建成功',
    'data': page
  }
}
