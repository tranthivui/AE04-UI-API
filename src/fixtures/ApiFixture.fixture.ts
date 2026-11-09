import { ProductApi } from "../api/ProductApi";
import {test as base} from "@playwright/test"

type ApiFixture={
    productApi: ProductApi;
}

export const test=base.extend<ApiFixture>({
    productApi: async({request}, use)=>{
        const productApi= new ProductApi(request);
        await use(productApi);
    }
})