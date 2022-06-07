import { Router } from 'express'
import { ContactRepository } from '../repositories/contacts'

const contactRouter = Router()
const contactRepository = new ContactRepository()

contactRouter.get('/contacts?:query', (req, res, next) => {
  const query = req.query.query as string
  try {
    const data = contactRepository.find(query)
    if (!data) {
      return next('any-not-found')
    }
    return res.json(data)
  } catch (error) {
    throw new Error("error-get-contacts");
  }
})

export { contactRouter }