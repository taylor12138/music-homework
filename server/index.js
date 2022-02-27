//app.js
const express = require('express')
const router = require('./router')

const app = express()
//配req.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//挂载路由
app.use(router)

app.listen(5208, () => {
  console.log('5208 is running!!...')
})
