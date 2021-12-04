/* eslint-disable no-undef */


describe("First test ", () => {
  it("can run a test", () => {
    assert.equal(100, 100) 
  })

  // it("Can go to google!", () => {
  //   cy.visit("http://www.google.ca")
  // })

  it("Visit our homepage", () =>{
    cy.visit("http://localhost:1234/")
  })


})