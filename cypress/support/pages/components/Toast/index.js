import { ELEMENTS } from './element'
import BasePage from '../../BasePage'

class ToastComponents extends BasePage {
  constructor() {
    super()
  }
  confirmMessage(message) {
    this.shouldContainText(ELEMENTS.toast, message)
  }
}

export default new ToastComponents()
