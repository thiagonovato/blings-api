import { Contact } from '../model/contact'
import contactFile from '../../data/contacts.json'

interface IContactListDto {
  name: string
}

class ContactRepository {
  private contacts: Contact[] = []

  constructor() {
    this.contacts = contactFile
  }

  list(): IContactListDto[] {
    return this.contacts
  }
}

export { ContactRepository }