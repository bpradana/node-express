const express = require('express')
const userRouter = require('./user')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
  const kelas = {
    id: 1,
    nama: 'NodeJS'
  }
  res.json(kelas)
})

app.get('/about', (req, res) => {
  res.redirect('/user')
})

app.use(userRouter)

app.listen(port, () => {
  console.log(`started on port ${port}`)
}) 