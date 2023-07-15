import { useEffect } from "react"
import { DrinkModel, GetBlockIdsDrinkRequest, PushDrinksRequest, SetDrinksRequest } from "../connection/vendor-drinks/requests"
import { usePushDrinksMutation, useSetDrinksMutation } from "../connection/vendor-drinks/vendorDrinksApi"
import { Drink } from "../pages/models/drink"
import { v4 as uuidv4 } from 'uuid'
import { SetBlockedIds } from "./SetBlockedIds"

export const GetUpdateDrinks = () => {
    const data = localStorage.getItem('drinks')

    if(data) return JSON.parse(data) as Drink[]

    return [] as Drink[]
}