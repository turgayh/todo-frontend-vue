// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("should added task to list", async () => {
    await cy.visit("/");
    const uuid = () => Cypress._.random(0, 1e6);
    const data = uuid();
    await cy.get("input").type(data);
    await cy.get("button").click();
    cy.wait(3000);
    await cy.get(".todo-item").contains(data);
  });
});
