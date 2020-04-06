'use strict'
const TodoList = require('../../Models/TodoList')
var mongoose = require('mongoose');

class TodoListController {

  async test({ request, response }) {
    return response.sendStatus(200)
  }

  async list({ request, response }) {
    const page = request.input('page', '1')
    const size = request.input('size', '10')

    const list = await TodoList
      .find()
      .sort({ 'update_time': -1 })
      .skip((parseInt(page) - 1) * parseInt(size))
      .limit(parseInt(size))

    return response.send(list)
  }

  async detail({ params, response }) {
    const _id = mongoose.mongo.ObjectId(params.id)
    const ret = await TodoList.findOne({ _id: _id })
    return response.send(ret)
  }

  async create({ request, response }) {
    const data = {
      title: request.input('title'),
    }
    const ret = await TodoList.create(data)
    return response.send(ret)
  }

  async update({ params, request, response }) {
    const _id = mongoose.mongo.ObjectId(params.id)

    const data = {
      title: request.input('title'),
      complete_time: request.input('complete_time')
    }

    const ret = await TodoList.updateOne({ _id: _id }, { $set: data })

    return response.send(ret)
  }

  async remove({ params, response }) {
    const _id = mongoose.mongo.ObjectId(params.id)
    const ret = await TodoList.deleteOne({ _id: _id })
    return response.send(ret)
  }
}

module.exports = TodoListController
