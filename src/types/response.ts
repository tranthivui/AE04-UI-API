import { Product } from "./Product"

export type SearchProductRes={
    responseCode: number,
    products: Product []
}

export type ApiMessageResponse={
    responseCode: number,
    message: string
}