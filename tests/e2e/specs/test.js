// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("should added task to list", () => {
    cy.visit("/");
    const uuid = () => Cypress._.random(0, 1e6);
    const data = uuid();
    cy.get("input").type(data);
    cy.get("button").click();
    cy.wait(3000);
    cy.get(".todo-item").contains(data);
  });
});
