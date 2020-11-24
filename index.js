const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/user', (req, res) => {
  res.send('Get User')
})

app.post('/user', (req, res) => {
  res.send('Post User')
})

app.put('/user', (req, res) => {
  res.send('Put User')
})

app.delete('/user', (req, res) => {
  res.send('Delete User')
})

app.listen(port, () => {
  console.log(`started on port ${port}`)
}) 