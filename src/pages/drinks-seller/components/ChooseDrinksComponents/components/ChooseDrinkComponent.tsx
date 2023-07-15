import { usePushDrinksMutation } from "../../../../../connection/vendor-drinks/vendorDrinksApi"
import { Drink } from "../../../../models/drink"
import styles from "./ChooseDrinkComponent.module.scss"

interface DrinkComponentProps {
    drink: Drink
    AddDrinksChosen(drink: Drink): void
}

export const ChooseDrinkComponent = (props: DrinkComponentProps) => { 
    const blockedIdsDrinkData = localStorage.getItem('drink-ids-blocked')
    let isBlock = false
    
    if(blockedIdsDrinkData) {
        if(blockedIdsDrinkData?.toString())
        if((JSON.parse(blockedIdsDrinkData) as string[]).findIndex(id => id === props.drink.id) !== -1)
            isBlock = true;
    }
    
    return (
        <div>
            {!isBlock &&
                <div className={styles.chooseDrink} onClick={() => props.AddDrinksChosen(props.drink)}>
                    <img className={styles.chooseDrinkIcon} src={props.drink.image}></img>
                    <div className={styles.chooseDrinkText}>
                        <div>name: {props.drink.name}</div>    
                        <div>price: {props.drink.price}</div>    
                        <div>quantity: {props.drink.quantity}</div>    
                    </div>
                </div>
            }
        </div>
    )
}