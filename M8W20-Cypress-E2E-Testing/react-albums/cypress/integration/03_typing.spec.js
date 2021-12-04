describe("Test for the input field", () => {
  beforeEach(() => {
    cy.visit('/')
    // const input =  cy.get(".search__form").find("input.radius")
    cy.get(".search__form")
      .find("input.radius")
      .as("inputField")
  })

  it("can type into the input field", () => {
    // cy.get(".search__form")
    //   .find("input.radius")
    cy.get("@inputField")
      .type("blink 18", {delay: 200})
  })

  it("can type backspace", () => {
    // cy.get(".search__form")
    //   .find("input.radius")
    cy.get("@inputField")
      .type("Billl{backspace}ie Eill{backspace}is", {delay: 400})
  })
})