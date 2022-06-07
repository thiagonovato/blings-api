import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!')
})