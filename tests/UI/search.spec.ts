import { searchKeyWords } from "../../src/data/searchKeyWords";
import { expect, test } from "../../src/fixtures/index.fixture";
import { getSearchResult } from "../helpers/search.helper";

test.describe("Verify search result from UI with API", () => {
    for (const productName of searchKeyWords.found) {
        test(`Verify search keyword: ${productName}`, async ({ productApi, productPage }) => {
            const productFromApi = await getSearchResult(productApi, productName);
            await productPage.goto();
            await productPage.search(productName);
            await expect(productPage.searchTitle).toBeVisible();
            const listProductNames = productPage.getListProductNames();
            await expect(listProductNames).toHaveCount(productFromApi.length);
            await expect(listProductNames).toHaveText(productFromApi.map(p => p.name));
        })
    };

    test("AE04-UI-NEG-01: Not have result", async ({ productApi, productPage }) => {
        const productFromApi = await getSearchResult(productApi, searchKeyWords.notFound);
        expect(productFromApi.length).toBe(0);
        await productPage.goto();
        await productPage.search(searchKeyWords.notFound);
        await expect(productPage.searchTitle).toBeVisible();
        await expect(productPage.productList).not.toBeVisible();
    })
})