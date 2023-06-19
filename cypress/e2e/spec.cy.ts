//testとしては改善できる点＝＞ 返ってきたレスポンスはAPIに左右されてしまう,お店の件数は必ずしも一緒とは限らない
//０ではない=>nullやundefinedではないといったことを考える
//件数の数字ではない部分を取得する=>カードが一件以上あることをチェックする<=件数はi件で出ててもカードが出てないと致命的だよね
//API依存のテストはやめる
// クリック後nullじゃないことを確かめる=>何かしらの文字列が入っている
//url決め打ちで書く方法がある
// HotPapperのAPIをキャッシュする<=Supabaseに全部とってあげる
describe("検索に関するテスト", () => {
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
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
  });
  context("カテゴリー検索", () => {
    it("[カフェ]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#cafe").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("[肉料理]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#meat").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("[ラーメン]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#ramen").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("[居酒屋]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#izakaya").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("[中華]", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#chinese").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
  });
  context("予算検索", () => {
    it("¥~1000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#oneCoin").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("¥1001~2000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#twoCoin").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("¥2001~3000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#oneBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("¥3001~4000", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#twoBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
    it("¥4001~", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#manyBill").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get("ul.restaurantsList")
        .should("have.length", 1)
        .find("div.Card_card__QH1mK")
        .should("exist")
        .and("have.length.gte", 1);
    });
  });
  context("詳細ページのテスト", () => {
    it("居酒屋", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#izakaya").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".Card_button__eHZO8").first().click();
      cy.get(".detail_shopName__POQib").should(($element) => {
        expect($element).to.not.be.null;
        expect($element).to.not.be.undefined;
      });
      cy.get(".InformationList_informationListTitle__Z3mFF").each(
        ($element) => {
          cy.wrap($element).should("not.be.null").should("not.be.undefined");
        }
      );
    });
     it("肉料理", () => {
      cy.viewport(1440, 900);
      cy.visit("localhost:3000");
      cy.get("#meat").click();
      cy.get(".Category_searchButton__g_6Wt").click();
      cy.get(".Card_button__eHZO8").first().click();
      cy.get(".detail_shopName__POQib").should(($element) => {
        expect($element).to.not.be.null;
        expect($element).to.not.be.undefined;
      });
      cy.get(".InformationList_informationListTitle__Z3mFF").each(
        ($element) => {
          cy.wrap($element).should("not.be.null").should("not.be.undefined");
        }
      );
    });
  });
});
