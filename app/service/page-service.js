const Model = require('../model/index')
const { generateRouterId } = require('../util')

module.exports = {
  createPage
}

// 创建 Page
async function createPage(ctx, userId, userName, componentData = '[]', componentTree = '[]') {
  let routerId = await generateUniqueRouterId(userId)

  let shareData = {
    'title': `${userName} 的 GLS 页面`,
    'link': ``,
    'desc': '',
    'imgUrl': ''
  }

  let settings = {
    'test': true
  }

  let page = await Model.Page.create({
    user_id: userId,
    router_id: routerId,
    title: `${userName} 的 GLS 页面`,
    setting: JSON.stringify(settings),
    share_data: JSON.stringify(shareData)
  })

  return page.get()
}

// 生成唯一的 routerId
async function generateUniqueRouterId(userId) {
  let routerId
  let isIdUnique = false // routerId 是否唯一

  do {
    routerId = generateRouterId(userId)
    await Model.Page.findOne({
      where: {
        router_id: routerId
      }
    }).then((res) => {
      if (res === null) {
        isIdUnique = true
      }
    })
  } while (!isIdUnique)

  return routerId
}
