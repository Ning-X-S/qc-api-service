module.exports = (sequelize, dataTypes) => {
  let Page = sequelize.define('Page', {
    page_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    router_id: {
      type: dataTypes.STRING,
      allowNull: false
    },
    feed_router_id: {
      type: dataTypes.STRING
    },
    tag_id: {
      type: dataTypes.INTEGER
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    record_id: {
      type: dataTypes.INTEGER
    },
    status: {
      type: dataTypes.INTEGER
    },
    password: {
      type: dataTypes.STRING
    },
    setting: {
      type: dataTypes.TEXT
    },
    title: {
      type: dataTypes.TEXT
    },
    share_data: {
      type: dataTypes.TEXT
    },
    goods_id: {
      type: dataTypes.INTEGER
    },
    created_at: {
      type: dataTypes.DATE
    },
    updated_at: {
      type: dataTypes.DATE
    },
    compile_begin_at: {
      type: dataTypes.DATE
    },
    compile_end_at: {
      type: dataTypes.DATE
    },
    last_task_id: {
      type: dataTypes.INTEGER
    },
    last_record_id: {
      type: dataTypes.INTEGER
    }
  }, {
    tableName: 'qc_page',
    timestamps: false // 必须加上，不然会多查询 createdAt 和 updatedAt 列
  })
  return Page
}
