describe("検索に関するテスト", () => {
  it("詳細",()=>{
    cy.viewport(1440, 900);
    cy.visit("localhost:3000");
    cy.get('input[type="search"]').type("ちばちゃん");
    cy.get('button[aria-label="検索"]').click();
    cy.get(".Card_button__eHZO8").eq(2).click({force:true})
  })
  context("キーワード検索", () => {
    it("ちばちゃん", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get('input[type="search"]').type("ちばちゃん");
      cy.get('button[aria-label="検索"]').click();
      cy.get(".resultReturn").should("have.text", "1");
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.initialFadeUp")
        .should("have.length", 1);
    });
    it("角家", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get('input[type="search"]').type("角家");
      cy.get('button[aria-label="検索"]').click();
      cy.get(".resultReturn").should("have.text", "1");
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.initialFadeUp")
        .should("have.length", 1);
    });
  });
  context("カテゴリー検索", () => {
    it("[カフェ]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#cafe").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "12");
    });
    it("[肉料理]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#meat").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "16");
    });
    it("[ラーメン]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#ramen").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "4");
    });
    it("[居酒屋]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#izakaya").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "103");
    });
    it("[中華]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#chinese").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "36");
    });
  });
  context("予算検索", () => {
    it("¥~1000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#oneCoin").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "9");
    });
    it("¥1001~2000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#twoCoin").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "61");
    });
    it("¥2001~3000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#oneBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "97");
    });
    it("¥3001~4000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#twoBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "56");
    });
    it("¥4001~", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#manyBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".resultReturn").should("have.text", "26");
    });
  });
});