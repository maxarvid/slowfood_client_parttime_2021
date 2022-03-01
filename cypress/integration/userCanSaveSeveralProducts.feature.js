describe("user can add more products to their order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.visit("/");
    cy.intercept("POST", "**/api/orders", {
      fixture: "order.json",
    }).as("Orders.create");

    cy.get("[data-cy=order-button]").last().click();
    cy.get("[data-cy=order-button]").first().click();
  });

  it("is expected to display a message when another product is added", () => {
    cy.get("#message-box").should(
      "contain.text",
      "chicken wings was added to your order"
    );
  });
});
  
