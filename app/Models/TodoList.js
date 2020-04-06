'use strict'

const mongoose = require("mongoose");

// 配置数据模型
const TodoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  complete_time: {
    type: Date
  },
  create_time: {
    type: Date,
    default: Date.now,
  },
  update_time: {
    type: Date
  }
}, {
  timestamps: {
    createdAt: 'create_time',
    updatedAt: 'update_time'
  }
})

module.exports = mongoose.model("TodoList", TodoListSchema);
