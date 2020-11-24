const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const kelas = {
    id: 1,
    nama: 'NodeJS'
  }
  res.json(kelas)
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

app.put('/user/:id', (req, res) => {
  const id =req.params
  res.send(id)
})

app.delete('/user/:id', (req, res) => {
  const id =req.params
  res.send(id)
})

app.listen(port, () => {
  console.log(`started on port ${port}`)
}) 