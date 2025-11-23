export const ELEMENTS = {
  buttonNewOrg: '[data-testid="new-organization-button"]',
  inputNewOrg: '[data-testid="organization-name-input"]',
  buttonSaveOrg: '[data-testid="save-organization-button"]',

  cardOrg: (id) => `[data-testid="organization-card-${id}"]`,
  cardOrgPrefix: '[data-testid^="organization-card-"]',
}
