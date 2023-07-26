import { useMemo, useState } from "react"
import { GetDrinks } from "../../services/GetDrinks"
import { Drink } from "../models/drink"
import { ChooseDrinksComponent } from "./components/ChooseDrinksComponents/ChooseDrinksComponent"
import { ChosenDrinksComponent } from "./components/ChosenDrinksComponents/ChosenDrinksComponent"
import { ButtonBlockComponent } from "./components/ButtonComponents/ButtonBlockComponent"
import { ButtonDropComponent } from "./components/ButtonComponents/ButtonDropComponent"
import { getAccessToken } from "../../connection/getAccessToken"
import { useNavigate } from "react-router-dom";
import { useBlockDrinksMutation, useUnBlockDrinksMutation } from "../../connection/vendor-drinks/vendorDrinksApi"
import styles from "./DrinksAdmin.module.scss"
import { BlockIdsDrinkRequest } from "../../connection/vendor-drinks/requests"
import { GetUpdateDrinks } from "../../services/GetUpdateDrinks"
import { SetBlockedIds } from "../../services/SetBlockedIds"
import { Login } from "../components/Login/Login"
import userManager from "../../connection/userManager"

export const DrinksAdmin = () => {
    const drinks = GetDrinks()
    const [drinksChosen, setDrinksChosen] = useState([] as Drink[])
    const [drinksChoose, setDrinksChoose] = useState(drinks)
    const [blockDrinks] = useBlockDrinksMutation()
    const [unblockDrinks] = useUnBlockDrinksMutation()

    const login = getAccessToken()
  
    if(!login) {
        userManager.signinRedirect()
    }

    const AddDrinksChosen = (drink: Drink) => {
        const idx = drinksChoose.findIndex(d => d.id === drink.id)

        if(idx !== -1) {
            if(drink.quantity > 0){
                drink.quantity = -1

                setDrinksChosen(drinksChosen.concat(drink))
            }
            else console.error('store quntity and chosen drink, not equals to DrinksSeller')          
        }
        else console.error('not found drink id to DrinksSeller')    
    }

    const Drop = () => {
        setDrinksChoose(GetUpdateDrinks())
        setDrinksChosen([])
    }

    const Block = () => {
        const ids = drinksChosen.map(d => d.id)
        
        blockDrinks({ids: ids} as BlockIdsDrinkRequest)
        .unwrap()
        .then(() => {
            localStorage.setItem(
                'drink-ids-blocked', 
                JSON.stringify(ids as string[]
            )) 

            setDrinksChoose(GetUpdateDrinks())
            setDrinksChosen([])    
        })    
    }

    const UnBlock = (ids: string[]) => {    
        unblockDrinks({ids: ids} as BlockIdsDrinkRequest)
        .unwrap()
        .then(() => {
            const data = localStorage.getItem('drink-ids-blocked')
            console.log(ids)
            if(data) {
                const removeIds = JSON.parse(data) as string[]
                removeIds.forEach(id => delete ids[ids.findIndex(_id => id === _id)])

                localStorage.setItem(
                    'drink-ids-blocked', 
                    JSON.stringify(ids)
                ) 
            }
                  
            setDrinksChoose(GetUpdateDrinks())
            setDrinksChosen([])    
        })    
    }
//userManager.signinRedirect()
    return (
        <div className={styles.drinksSeller}>     
           {login && 
                <div>
                    <ChooseDrinksComponent 
                        UnBlock={UnBlock} 
                        AddDrinksChosen={AddDrinksChosen} 
                        drinksChoose={drinksChoose}
                    />  
                    <ChosenDrinksComponent drinks={drinksChosen}/>   
                    <div className={styles.endPanel}>
                        <div className={styles.endPanelItem}>
                            {drinksChosen.length > 0 &&
                                <ButtonBlockComponent Drop={Block}/>
                            } 
                        </div>
                        <div className={styles.endPanelItem}>
                            {drinksChosen.length > 0 &&
                                <ButtonDropComponent Drop={Drop}/>
                            } 
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}//ButtonAddComponent