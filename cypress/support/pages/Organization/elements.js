export const ELEMENTS = {
  buttonNewOrg: '[data-testid="new-organization-button"]',
  inputNewOrg: '[data-testid="organization-name-input"]',
  buttonSaveOrg: '[data-testid="save-organization-button"]',
  buttonGerenciarOrg: '[data-testid="manage-organization-button"]',
  buttonApagarOrg: '[data-testid="delete-organization-button"]',

  cardOrg: (id) => `[data-testid="organization-card-${id}"]`,
  cardOrgPrefix: '[data-testid^="organization-card-"]',
}
