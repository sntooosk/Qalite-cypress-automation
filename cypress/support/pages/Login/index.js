const el = require('./elements').ELEMENTS

class LoginPage {
  accessLoginPage() {
    cy.visit('/')
  }

  typeEmail(email) {
    this.typeIntoField(el.inputEmail, email)
  }

  typePassword(password) {
    this.typeIntoField(el.inputPassword, password)
  }

  submitForm() {
    cy.get(el.buttonSubmit).click()
  }

  fillCredentials({ email, password }) {
    if (email) this.typeEmail(email)
    if (password) this.typePassword(password)
  }

  validateSuccess() {
    cy.url().should('contain', '/admin')
  }

  validateMessage(message) {
    cy.get(el.alertMessage).should('contain', message)
  }

  typeIntoField(selector, value) {
    cy.get(selector).clear()
    cy.get(selector).type(value)
  }
}

export default new LoginPage()
