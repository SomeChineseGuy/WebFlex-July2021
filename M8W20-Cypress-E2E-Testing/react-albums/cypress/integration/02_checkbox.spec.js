describe("Test for the checkboxes filter", () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it("can uncheck the box explicit", ()=> {
    // cy.visit("http://localhost:1234/")
    cy.get(".filters__form-group")
      .first()
      .find(".filters__checkbox")
      .uncheck()
      
  })

  it("can uncheckbox by clicking label", () =>{
    // cy.visit("http://localhost:1234/")
    cy.contains("EP")
      .click()

    cy.get("#EP")
      .should("be.checked")
  })

})