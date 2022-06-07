import express from 'express'
import { contactRouter } from './routes/contacts.routes'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.use(contactRouter)


app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!')
})