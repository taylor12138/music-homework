const mongoose = require('./db')
const Schema = mongoose.Schema
const DreamSchema = new Schema({
  time: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: '没有内容哟'
  }
})
const Dream = mongoose.model('Dream', DreamSchema, 'dream')
module.exports = Dream
