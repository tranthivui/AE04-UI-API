import { APIRequestContext, APIResponse } from "@playwright/test";
import { API_SEARCH_PRODUCT } from "../config/paths";

export class ProductApi {
    private readonly request: APIRequestContext;

    constructor(productAPI: APIRequestContext) {
        this.request = productAPI;
    }

    async searchProduct(searchText: string): Promise<APIResponse> {
        const searchProductRes = await this.request.post(API_SEARCH_PRODUCT, {
            form: {
                search_product: searchText
            }
        });
        return searchProductRes;
    }

    async searchProductWithoutKeyword(): Promise<APIResponse> {
        const searchProductRes = await this.request.post(API_SEARCH_PRODUCT);
        return searchProductRes;
    }
}