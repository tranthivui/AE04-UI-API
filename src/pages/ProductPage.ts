import { Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly url = "/products";
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchBtn: Locator;
    readonly searchTitle: Locator;
    readonly searchResultArea: Locator;
    readonly productList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByRole("textbox", { name: "Search Product" })
        this.searchBtn = this.page.locator("#submit_search");
        this.searchTitle=this.page.getByRole("heading",{level:2, name: "SEARCHED PRODUCTS"});
        this.searchResultArea=this.page.locator(".features_items");
        this.productList=this.searchResultArea.locator(".col-sm-4");
    }

    async goto(){
        await this.page.goto(this.url,{
            waitUntil: "load"
        });
    }

    getListProductNames(): Locator{
        return this.searchResultArea.locator(".productinfo.text-center p");

    }

    async fillSearchKeyword(keyword:string){
        await this.searchInput.fill(keyword);
    }

    async clickSearchBtn(){
        await this.searchBtn.click();
    }

    async search(keyword:string){
        await this.fillSearchKeyword(keyword);
        await this.clickSearchBtn();
    }
}