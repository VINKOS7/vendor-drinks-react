import { useEffect } from "react"
import { DrinkModel, GetBlockIdsDrinkRequest, PushDrinksRequest, SetDrinksRequest } from "../connection/vendor-drinks/requests"
import { usePushDrinksMutation, useSetDrinksMutation } from "../connection/vendor-drinks/vendorDrinksApi"
import { Drink } from "../pages/models/drink"
import { v4 as uuidv4 } from 'uuid'
import { SetBlockedIds } from "./SetBlockedIds"

export const GetDrinks = () => {
    const data = localStorage.getItem('drinks')
    const dataLast = localStorage.getItem('drinks-last')
    const [pushDrinks] = usePushDrinksMutation()
    const [saveDrinks] = useSetDrinksMutation()


    if(data) {
        const drinks = JSON.parse(data) as Drink[]

        const drinksLast = [] as Drink[]

        if(dataLast){
            (JSON.parse(dataLast) as Drink[]).forEach(d => drinksLast.push(d))
            
            if(drinks.toString() != drinksLast.toString()) {           
                localStorage.setItem('drinks-last', JSON.stringify(drinks)) 

                const drinkRequestModels = drinks.map(d => { return {
                    id: d.id,
                    name: d.name,
                    price: d.price,      
                    image: d.image,
                    cup: d.cup
                } as DrinkModel}) 

                pushDrinks({drinks: drinkRequestModels} as PushDrinksRequest)
            }
        }

        SetBlockedIds({ids: drinks.map(d => d.id)} as GetBlockIdsDrinkRequest)

        return drinks
    }

    const drinks = SetDrinks()
    
    const drinkRequestModels = drinks.map(d => { return {
        id: d.id,
        name: d.name,
        price: d.price,      
        image: d.image,
        cup: d.cup
    } as DrinkModel}) 

    saveDrinks({drinks: drinkRequestModels} as SetDrinksRequest)

    localStorage.setItem('drinks-last', JSON.stringify(drinks)) 
    localStorage.setItem('drinks', JSON.stringify(drinks))

    SetBlockedIds({ids: drinks.map(d => d.id)} as GetBlockIdsDrinkRequest)
     
    return drinks
}

const SetDrinks = () => {
    const drinks = [
        {id: uuidv4(), name: 'pepsi', quantity: 5, price: 15, image: "https://krym.vodovoz.ru/upload/iblock/4c9/4c9815545466d9c68b3eca36bed578f5.jpeg", cup:{material: 'metal', size: 0.5}},
        {id: uuidv4(), name: 'kvass', quantity: 5, price: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRuhlUb_E2YMyJ-Xq__-6vJ3fb3NCh2ZCDmNjo4eb9x4ZEoRQ2uxsMqbU46S5ER8-jMc&usqp=CAU", cup:{material: 'cart', size: 0.3}},
        {id: uuidv4(), name: 'lemonade', quantity: 5, price: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrRCEWG0Cmeb039FezbGZlR4uPiHmwqNL3g&usqp=CAU", cup:{material: 'plastik', size: 1}},
        {id: uuidv4(), name: 'baikal', quantity: 5, price: 9, image: "https://www.depotwpf.com/upload/resize_cache/iblock/a72/740_468_2/a72d385913f798554643a768dce5a316.jpg", cup:{material: 'glass', size: 1}},
        {id: uuidv4(), name: 'sprite', quantity: 5, price: 10, image: "https://m.media-amazon.com/images/I/51TeFnx6GRL._AC_UF1000,1000_QL80_.jpg", cup:{material: 'plastik', size: 0.5}},
        {id: uuidv4(), name: 'tarkhuna', quantity: 5, price: 10, image: "https://bulka.md/wp-content/uploads/2018/02/IMG_2221-13-02-18-09-16.jpg", cup:{material: 'glass', size: 0.5}},
        {id: uuidv4(), name: 'fanta', quantity: 5, price: 10, image: "https://www.coca-cola.co.uk/content/dam/one/gb/en/product/fanta-organe-600x400.jpg", cup:{material: 'metall', size: 0.3}},
    ] as Drink[]

    return drinks
}