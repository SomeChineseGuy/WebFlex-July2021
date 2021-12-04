describe("test api request", () => {
  it("can display results from an API request", () => {
    // Visit the app
    cy.visit("/")
    // Before we type, tell cypress to intercept request and respond with our custom fixture
    cy.intercept("GET", "**/search*", {fixture: "itunes"})
    .as("searchResult")

    // find input and type in blink 182
    cy.get(".search__form")
      .find("input.radius")
      .type("eminem", {delay: 200})
      .should("have.value", "eminem")

    // Grab the spinner and make sure it works
    cy.get(".spinner")
      .should("be.visible")

    // WAit until the search results come back; check for a album
    cy.wait("@searchResult")
      .get("main")
      .contains("NINE")

    // uncheck the explicits
    cy.get("#Explicit")
    .uncheck()

    // make sure the explicit album no longer on the page
    cy.get("article")
    .should("not.contain", "NINE")
  })
})