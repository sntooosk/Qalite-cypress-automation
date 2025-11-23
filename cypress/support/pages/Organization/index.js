const el = require('./elements').ELEMENTS

class OrganizationPage {
  accessOrganizationPage() {
    cy.login()
  }

  clickButton() {
    cy.get(el.buttonNewOrg).click()
  }

  typeNewOrg(newOrgName) {
    cy.get(el.inputNewOrg).clear()
    cy.get(el.inputNewOrg).type(newOrgName)
  }

  clickButtonSalvar() {
    cy.get(el.buttonSaveOrg).click()
  }

  // SALVA O ID GERADO
  saveGeneratedOrgId() {
    cy.get(el.cardOrgPrefix)
      .first()
      .invoke('attr', 'data-testid')
      .then((value) => {
        const id = value.replace('organization-card-', '')
        Cypress.env('orgId', id)
      })
  }

  // USA O ID SALVO
  clickCardOrg() {
    const id = Cypress.env('orgId')
    cy.get(el.cardOrg(id)).click()
  }
}

export default new OrganizationPage()
