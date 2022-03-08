describe("user can add more products to their order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.visit("/");

    cy.intercept("POST", "**/api/orders", {
      fixture: "order.json",
    }).as("createOrder");

    cy.intercept("PUT", "**/api/orders", {
      fixture: "orderUpdate.json",
    }).as("updateOrder");

    cy.get("[data-cy=order-button]").last().click();
    cy.wait(5000)
    cy.get("[data-cy=order-button]").first().click();
  });

  it("is expected to display a message when another product is added", () => {
    cy.get("#message-box").should(
      "contain.text",
      "chicken wings was added to your order"
    );
  });

  it("is expected to make a PUT request", () => {
    cy.wait("@updateOrder").its("request.method").should("eq", "PUT");
  });
});
