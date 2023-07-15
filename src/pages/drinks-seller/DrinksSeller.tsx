import { useEffect, useState } from "react"
import { Drink } from "../models/drink"

import styles from "./DrinksSeller.module.scss"
import { Coin } from "./models/coin"

import { GetDrinks } from "../../services/GetDrinks"
import { ChooseDrinksComponent } from "./components/ChooseDrinksComponents/ChooseDrinksComponent"
import { ChosenCoinsComponent } from "./components/ChosenCoinsComponents/ChosenCoinsComponent"
import { ChooseCoinsComponent } from "./components/ChooseCoinsComponents/ChooseCoinsComponent"
import { ChosenDrinksComponent } from "./components/ChosenDrinksComponents/ChosenDrinksComponent"
import { ButtonDropComponent } from "./components/ButtonComponents/ButtonDropComponent"
import { ButtonBuyComponent } from "./components/ButtonComponents/ButtonBuyComponent"
import { useLazyGetIdsBlockStatusDrinkQuery } from "../../connection/vendor-drinks/vendorDrinksApi"
import { GetBlockIdsDrinkRequest } from "../../connection/vendor-drinks/requests"
import { rejects } from "assert"

export const DrinksSeller = () => {
    //const [getBlockIds] = useGetIdsBlockStatusDrinkMutation()
    const [drinksChosen, setDrinksChosen] = useState([] as Drink[])
    const [coinsChosen, setCoinsChosen] = useState([] as Coin[])
    const [drinksChoose, setDrinksChoose] = useState(GetDrinks())
    const price = drinksChosen.map(d => d.price*d.quantity).reduce((partialSum, a) => partialSum + a, 0)
    const money = coinsChosen.map(c => c.value).reduce((partialSum, a) => partialSum + a, 0)

    const AddCoinsChosen = (coin: Coin) => setCoinsChosen(coinsChosen.concat(coin))

    const AddDrinksChosen = (drink: Drink) => {
        const idx = drinksChoose.findIndex(d => d.id === drink.id)

        if(idx !== -1) {
            if(drink.quantity > 0){
                drink.quantity--

                setDrinksChosen(drinksChosen.concat({
                    id: drink.id,
                    name: drink.name,
                    image: drink.image,
                    price: drink.price,
                    quantity: 1,
                    cup: drink.cup
                } as Drink))
            }
            else console.error('store quntity and chosen drink, not equals to DrinksSeller')          
        }
        else console.error('not found drink id to DrinksSeller')    
    }

    const Drop = () => {
        setDrinksChosen([])
        setDrinksChoose(GetDrinks())
        setCoinsChosen([])
    }

    const Buy = () => {
        Drop()
    }

    return (
        <div className={styles.drinksSeller}>
            <ChooseDrinksComponent drinksChoose={drinksChoose} AddDrinksChosen={AddDrinksChosen}/>         
            <ChosenCoinsComponent coins={coinsChosen}/>
            <ChooseCoinsComponent AddCoinsChosen={AddCoinsChosen}/>
            {price + money > 0 && 

                <div className={styles.infoCheckPanel}>                
                    <div className={styles.infoCheck}>
                        price: {price}
                        money: {money}
                    </div>
                </div>
            }
            <div className={styles.endPanel}>
                <div className={styles.endPanelItem}><ButtonDropComponent Drop={Drop} price={price}money={money}/></div>
                <div className={styles.endPanelItem}><ChosenDrinksComponent drinks={drinksChosen}/></div>
                <div className={styles.endPanelItem}><ButtonBuyComponent Buy={Buy} price={price}money={money}/></div>       
            </div>       
        </div>
    )
}//ButtonDropComponent