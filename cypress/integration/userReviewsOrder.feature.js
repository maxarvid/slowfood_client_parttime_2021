describe("Display products in order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/orders/**", {
        fixture: "orderReview.json",
      }).as("getOrder");
      cy.visit("/");
      cy.get("[data-cy=order-button]").last().click();
      cy.get("[data-cy=show-order]").click();
    });

    it("is expected to show a list of products", () => {
      cy.get("[data-cy=order-list]").children().should("have.length", 3);
    });

    it("is expected to include a product name", () => {
      cy.get("[data-cy=order-list]")
        .children()
        .last()
        .within(() => {
          cy.contains("Avo salad").should("be.visible");
        });
    });

    it("is expected to include total cost", () => {
      cy.get("[data-cy=total-cost]").should("contain", "750");
    });
  });

  // describe("unsuccessfully", () => {
  //   beforeEach(() => {
  //     cy.intercept("GET", "**/api/orders/**", {
  //       fixture: "emptyOrder.json",
  //     }).as("emptyOrder");
  //     cy.visit("/");
  //     cy.get("[data-cy=show-order]").click();
  //   });

  //   it("is expected to warn the user that there are no products in order", () => {
  //     cy.get("#message-box").should(
  //       "contain.text",
  //       "There are no items in your order"
  //     );
  //   });
  // });
});
