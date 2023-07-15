export type Drink = {
    id: string
    name: string
    quantity: number
    price: number
    image: string
    cup: Cup
}

export type Cup = {
    material: string,
    size: number
}