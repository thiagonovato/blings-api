import express from 'express'
import { contactRouter } from './routes/contacts.routes'

const app = express()

app.get('/', (req, res) => {
  return res.send('API Blings')
})

app.use(contactRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started!')
})