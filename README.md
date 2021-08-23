## sentry
```JavaScript
var Raven = require('raven');
Raven.config('raven链接').install();
```

## 命令
```
npm run dev # 启动服务（开发模式）
npm run pro # 启动服务（生产环境）
npm run lint # eslint 语法检查
npm run doc # 生成 API 文档
```

## 接口返回数据格式
### 成功
```JavaScript
{
  'error_code': 0,
  'message': 'xx成功',
  'data': {
    // 具体的数据
  }
}
```

### 失败
```JavaScript
{
  'error_code': 1,
  'message': '具体错误信息',
  'data': {}
}
```



## RESTful 命名参考
来自：[Egg文档](https://eggjs.org/zh-cn/basics/router.html#restful-%E9%A3%8E%E6%A0%BC%E7%9A%84-url-%E5%AE%9A%E4%B9%89)

Method | Route | Controller.Action | Function
-- | -- | -- | --
GET | /posts | posts.index | 列表
GET | /posts/:id | posts.show | 详情
POST | /posts | posts.create | 创建
PUT | /posts/:id | posts.update | 修改
DELETE | /posts/:id | posts.destroy | 删除

## Api 注释
采用 [Apidoc](http://apidocjs.com/) 的注解方式进行注释。
```
/**
 * @api {get} /user/:id 获取用户信息
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id 用户ID
 *
 * @apiSuccess {String} firstname 姓氏
 * @apiSuccess {String} lastname  名称
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "data": {
 *      "firstname": "xxx",
 *      "lastname": "xxx"
 *    }
 *  }
 */
```
VS code 可以安装 ApiDoc Snippets 扩展