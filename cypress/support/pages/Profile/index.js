import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class ProfilePage extends BasePage {
  constructor() {
    super()
    this.newLastName = ''
  }

  open() {
    this.visit('/profile')
  }

  typeLastName(name) {
    this.newLastName = name
    super.typeText(ELEMENTS.lastNameInput, name)
  }
  saveProfile() {
    this.click(ELEMENTS.updateButton)
  }
}

export default new ProfilePage()
