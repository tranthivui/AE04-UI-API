export type Product={
    id: number,
    name: string,
    price: string,
    brand: string,
    category: Category
}

export type UserType={
    usertype: string
}

export type Category={
    usertype:UserType,
    category: string
}