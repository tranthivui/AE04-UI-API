import { test as base } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { blockAds } from "../utils/blockAds";
export type PageFixture = {
    productPage: ProductPage;
}

export const test = base.extend<PageFixture>({
    productPage: async ({ page }, use) => {
        await blockAds(page);
        const productPage = new ProductPage(page);
        await use(productPage);
    }
})