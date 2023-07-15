import { Cup } from "../../pages/models/drink"

export type PushDrinksRequest = {
    drinks: DrinkModel[]
}

export type SetDrinksRequest = {
    drinks: DrinkModel[]
}

export type BlockIdsDrinkRequest = {
    ids: string[]
}

export type UnBlockIdsDrinkRequest = {
    ids: string[]
}

export type GetBlockIdsDrinkRequest = {
    ids: string[]
}

export type DrinkModel = {
    id: string
    name: string
    image: string
    price: number
    cup: Cup
}

export enum Status {
    Active,
    Stopped
}