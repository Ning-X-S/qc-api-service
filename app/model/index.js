/**
 * @todo ORM模型
 * @todo https://github.com/sequelize/sequelize
 */
const env = process.env.NODE_ENV

const fs = require('fs')
const path = require('path')

const Sequelize = require('sequelize')

const config = require('../../config')
const { error: GLSERROR } = require('../util')

const sqlConfig = config.sql || {}
const basename = path.basename(__filename)
let db = {}
let sequelizeConfig = {
  dialect: 'mysql',
  host: sqlConfig.host,
  port: sqlConfig.port,
  pool: {
    max: 100, // 最大值
    idle: 5000, // 闲时超时
    acquire: 10000
  },
  dialectOptions: {
    dateStrings: true, // 日期字符串（配合类型转换使用）
    typeCast: true // 类型转换
  },
  timezone: '+08:00'
}

if (env !== 'development') {
  // 是否打印数据库查询日志
  // 压力测试显示高并发下对性能有比较大的影响
  // 非开发环境下不启用
  sequelizeConfig['logging'] = false
}

let sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, sequelizeConfig)

sequelize.query = function () {
  return Sequelize.prototype.query.apply(this, arguments).catch(function (err) {
    console.log(err)
    throw new GLSERROR.SQLOperationException(err.original.sqlMessage, err)
  })
}

fs.readdirSync(__dirname)
  .filter(file => {
    // 过滤 . .. 和本文件
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    // 加载模块
    let model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

// 绑定 Model 之间的关联关系（如果 model 中定义了 associate 属性）
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
