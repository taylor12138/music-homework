const express = require('express')
const router = express.Router()
const moment = require('moment')

const Dream = require('../db/model/dream')

router.get('/', (req, res) => {
  res.send('ok')
})
router.post('/list', (req, res) => {
  let currentTime = moment(Date.now()).format('YYYY/MM/DD HH:mm:ss')
  let clientDream = new Dream({
    time: currentTime,
    content: req.body.content
  })
  clientDream.save((err, ret) => {
    if (err) {
      return res.status(500).send('Service err 500', err)
    }
    res.send(ret)
  })
})
router.get('/list', (req, res) => {
  Dream.find((err, ret) => {
    if (err) return res.status(500).send('Service err 500', err)
    res.send(ret)
  })
})

module.exports = router
