import { expect } from '@playwright/test';
import { test } from "../src/fixtures/ApiFixture.fixture"
import { searchKeyWords } from '../src/data/searchKeyWords';
import { SearchProductRes } from '../src/types/response';

test.describe("Verify search",()=>{
    for(const searchText of searchKeyWords){
      test(`AE04-01: Search API: ${searchText}`,async({productApi})=>{
        const searchProductRes=await productApi.searchProduct(searchText);
        expect(searchProductRes.status()).toBe(200);
        const searchProductResData:SearchProductRes=await searchProductRes.json();
        expect(searchProductResData.responseCode).toBe(200);
        expect(searchProductResData.products.length,`No product found for ${searchText}`).toBeGreaterThan(0);
        for(const product of searchProductResData.products){
          expect(
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.category.category.toLowerCase().includes(searchText.toLowerCase()), 
            `Product ${product.name} has neither name nor category containing ${searchText}`
          ).toBe(true);
        }
      })
    }
})