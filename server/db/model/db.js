const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://localhost:27017/music',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('数据库连接成功')
  }
)
module.exports = mongoose
