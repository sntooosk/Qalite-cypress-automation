import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    LoginPage.open()
    LoginPage.fillCredentials({ email, password })
    LoginPage.submit()
    LoginPage.expectSuccessfulLogin()
  },
)

Cypress.Commands.add('logout', () => {
  cy.window().then((win) => {
    win.indexedDB
      ?.databases?.()
      .then((dbs) =>
        dbs.forEach((db) => db?.name && win.indexedDB.deleteDatabase(db.name)),
      )
  })

  cy.clearLocalStorage()
  cy.clearCookies()
})
