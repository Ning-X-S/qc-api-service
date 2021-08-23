// 0xxx 系统错误（未捕获异常）
// 1xxx 用户错误
// 2xxx 资源错误（数据为空、请求数据不合法）
// 3xxx 执行错误

const SPEED_NO_AUTH = 4231001
const PERMISSION_DENIED = 4231002
const DATA_EMPTY = 4232001
const PARAM_ERROR = 4232002
const REQUIRED_PARAM_EMPTY = 4232003
const SQL_ERROR = 4233001
const REDIS_OP_ERROR = 4233002
const COMPILER_TASK_FAIL = 4233003
const OPERATION_REJECT_ERROR = 4233004

// 用户错误
class SpeedNoAuthException extends Error {
  constructor (message = '登录失效，请重新登录', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = SPEED_NO_AUTH
    this.status = 401
    this.level = 'warning'
  }
}

class PermissionDeniedException extends Error {
  constructor (message = '权限不足', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = PERMISSION_DENIED
    this.status = 200
  }
}

// 资源错误
class DataEmptyException extends Error {
  constructor (message = '未能找到相关数据', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = DATA_EMPTY
    this.status = 200
    this.level = 'warning'
  }
}

class ParamErrorException extends Error {
  constructor (message = '参数类型有误', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = PARAM_ERROR
    this.status = 200
    this.level = 'warning'
  }
}

class RequiredParamEmptyException extends Error {
  constructor (message = '缺少必填参数', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = REQUIRED_PARAM_EMPTY
    this.status = 200
    this.level = 'warning'
  }
}

// 执行错误
class SQLOperationException extends Error {
  constructor (message = '数据库查询语句有误', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = SQL_ERROR
    this.status = 200
  }
}

class RedisOperationException extends Error {
  constructor (message = 'Redis 操作失败', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = REDIS_OP_ERROR
    this.status = 200
  }
}

class CompilerTaskFailedException extends Error {
  constructor (message = '编译任务失败', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = COMPILER_TASK_FAIL
  }
}

class OperationRejectException extends Error {
  constructor (message = '服务器理解但拒绝你的请求', extra) {
    super(message)
    this.message = message
    this.extra = extra
    this.code = OPERATION_REJECT_ERROR
    this.status = 200
  }
}

module.exports = {
  ParamErrorException,
  RequiredParamEmptyException,
  SpeedNoAuthException,
  DataEmptyException,
  SQLOperationException,
  RedisOperationException,
  PermissionDeniedException,
  CompilerTaskFailedException,
  OperationRejectException
}
