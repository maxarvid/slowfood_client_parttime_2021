describe("interface", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.visit("/");
  });
  it("successfully renders", () => {
    cy.get("[data-cy=header]").should("contain", "Nordens");
    cy.get("[data-cy=footer]").should("contain", "Slowfood");
  });

  it("is expected not to render a review order button on inital render", () => {
    cy.get("[data-cy=show-order]").should("not.exist");
  });

  it('is expected to render a review order button once an order is in progress', () => {
    cy.intercept("POST", "**/api/orders", {
      fixture: "order.json",
    }).as("Orders.create");
    cy.get("[data-cy=order-button]").last().click();
    cy.get("[data-cy=show-order]").should("be.visible");
  });
});
