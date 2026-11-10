import { Product } from "./Product"

export type SearchProductRes={
    responseCode: number,
    products: Product []
}

export type SearchNotKeywordRes={
    responseCode: number,
    message: string
}