const express = require('express')
const router = express.Router()

let user = [
    {
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        id: 2,
        name: 'Doe',
        email: 'doe@gmail.com'
    }
]

router.route('/user')
  .get((req, res) => {
    res.json(user)
  })
  .post((req, res) => {
    user.push(req.body)
    console.log('Post User')
    res.send(user)
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