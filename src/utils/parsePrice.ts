export function parsePrice(price:string):number{
    const matched=price.match(/^Rs\.(\d+)$/);

    if(!matched){
        throw new Error(`Can not parse price from : ${price}`);
    }
    return parseFloat(matched[1]);
}