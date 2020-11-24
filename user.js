const express = require('express')
const router = express.Router()

router.route('/user')
  .get((req, res) => {
    res.send('Get User')
  })
  .post((req, res) => {
    res.send('Post User')
  })

router.put('/user/:id', (req, res) => {
  const id =req.params
  res.send(id)
})

router.delete('/user/:id', (req, res) => {
  const id =req.params
  res.send(id)
})

module.exports = router