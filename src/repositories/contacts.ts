import { Contact } from '../model/contact'
import contactFile from '../../data/contacts.json'
import { format, parseISO } from 'date-fns'
import age from '../utils/age'

interface IContactListDto {
  name: string
}

class ContactRepository {
  private contacts: Contact[] = []

  constructor() {
    this.contacts = contactFile
  }

  find(query: string): IContactListDto[] {
    const queryParams = query.split('+')

    let paramsForSearch = this.setParameters(queryParams)

    const result = this.contacts.filter(contact => {
      return Object.keys(paramsForSearch).every(key => {
        if (key !== "birthday") {
          return (contact[key]).toUpperCase().includes((paramsForSearch[key]).toUpperCase())
        } else {
          return age(contact[key]) === parseInt(paramsForSearch[key])
        }
      })
    }, paramsForSearch)

    return result
  }

  setParameters(queryParams) {
    let paramsForSearch = {}
    queryParams.forEach(param => {
      if (isNaN(parseInt(param))) {
        Object.assign(paramsForSearch, { name: param })
      } else {
        if (param.length <= 3) {
          Object.assign(paramsForSearch, { birthday: param })
        } else {
          Object.assign(paramsForSearch, { phone_number: param })
        }
      }
    })

    return paramsForSearch
  }
}

export { ContactRepository }