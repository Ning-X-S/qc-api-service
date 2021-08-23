const error = require('./error')
const raven = require('./raven')
const crypto = require('crypto')

const adminList = {
  '4443': '马文涛',
  '4703': '赵家灏',
  '3639': '席鹏博',
  '4447': '林美玲',
  '3695': '赵俊',
  '3957': '陈益杰',
  '4957': '陈莉',
  '4969': '席茜',
  '5015': '殷旭苗',
  '5113': '吴思伦',
  '1': '徐易容'
}

// 页面发布管理员
const pagePublisherList = {
  '5113': '吴思伦',
  '4909': '吴玮琦',
  '4865': '刘靖源',
  '4899': '邱文举'
}

// 文章发布管理员
const rssPublisherList = {
  '5113': '吴思伦'
}

module.exports = {
  sleep,
  checkIsAdmin,
  checkIsPagePublisher,
  checkIsRSSPublisher,
  generateRouterId,
  getURLParams,
  error,
  raven
}

function generateRouterId(userid = '') {
  let hash = crypto.createHash('sha256')
  hash.update(`${userid}${new Date().getTime()}`)
  return hash.digest('hex').slice(0, 9)
}

function checkIsAdmin(userid) {
  if (adminList[String(userid)]) {
    return true
  }
  return false
}

function checkIsPagePublisher(userid) {
  if (pagePublisherList[String(userid)]) {
    return true
  }
  return false
}

function checkIsRSSPublisher(userid) {
  if (rssPublisherList[String(userid)]) {
    return true
  }
  return false
}

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function getURLParams(url) {
  const obj = {}
  url.replace(/([^?&=]+)=([^&]+)/g, (_, key, val) => {
    obj[key] = val
  })
  return obj
}
