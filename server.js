const Koa = require('koa')
const bodyParser = require('koa-body')

const router = require('./app/router')
const errorCollector = require('./app/middleware/error-collector')
const headerController = require('./app/middleware/header-handler')
const globalConfigInjector = require('./app/middleware/global-injector')
// const { raven } = require('./app/util')

const app = new Koa()

var globalConfig = {}

app.use(headerController())
app.use(errorCollector())
app.use(bodyParser({ multipart: true }))
app.use(globalConfigInjector(globalConfig))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(7003)
console.log('http://127.0.0.1:7003')

// app.on('error', function (err) {
//   raven.captureException(err)
// })
