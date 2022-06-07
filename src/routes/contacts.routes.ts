import { Router } from 'express'
import { ContactRepository } from '../repositories/contacts'

const contactRouter = Router()
const contactRepository = new ContactRepository()

contactRouter.get('/contacts', (req, res) => {
  const data = contactRepository.list()
  return res.json(data)
})

export { contactRouter }