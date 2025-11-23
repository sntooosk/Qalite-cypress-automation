import Login from './pages/Login'
import users from '../fixtures/users.json'

const persistFirebaseAuth = () =>
  cy.window().then(
    ({ indexedDB, localStorage }) =>
      new Cypress.Promise((resolve, reject) => {
        const request = indexedDB.open('firebaseLocalStorageDb')

        request.onerror = () => reject(request.error)

        request.onsuccess = () => {
          const transaction = request.result.transaction(
            'firebaseLocalStorage',
            'readonly',
          )
          const store = transaction.objectStore('firebaseLocalStorage')
          const getAllRequest = store.getAll()

          getAllRequest.onerror = () => reject(getAllRequest.error)

          getAllRequest.onsuccess = () => {
            getAllRequest.result.forEach(({ fbase_key, value }) =>
              localStorage.setItem(fbase_key, value),
            )

            resolve()
          }
        }
      }),
  )

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    cy.session(
      { email, password },
      () => {
        Login.accessLoginPage()
        Login.fillCredentials({ email, password })
        Login.submitForm()
        Login.validateSuccess()
        persistFirebaseAuth()
      },
      {
        cacheAcrossSpecs: true,
        validate: () => {
          cy.window().its('localStorage.length').should('be.gt', 0)
        },
      },
    )

    cy.visit('/admin')
  },
)
