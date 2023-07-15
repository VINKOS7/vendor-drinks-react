import { useState } from "react"
import { Drink } from "../../../../models/drink"
import styles from "./ChooseDrinkComponent.module.scss"

interface DrinkComponentProps {
    drink: Drink
    AddDrinksChosen(drink: Drink): void
    UnBlock(ids: string[]): void
}

export const ChooseDrinkComponent = (props: DrinkComponentProps) => {
    const blockedIdsDrinkData = localStorage.getItem('drink-ids-blocked')
    let isBlock = false
    
    if(blockedIdsDrinkData) {
        if(blockedIdsDrinkData?.toString())
        if((JSON.parse(blockedIdsDrinkData) as string[]).findIndex(id => id === props.drink.id) !== -1)
            isBlock = true;
    }

    const Click = () => {
        props.AddDrinksChosen(props.drink)
    }

    return (
        <div>
            {props.drink.quantity !== -1 && !isBlock &&
                <div className={styles.chooseDrink} onClick={Click}>
                <img className={styles.chooseDrinkIcon} src={props.drink.image}></img>
                    <div className={styles.chooseDrinkText}>
                        <div>name: {props.drink.name}</div>    
                        <div>price: {props.drink.price}</div>    
                    </div>
                </div>
            }
            {props.drink.quantity === -1 &&
                <div className={styles.chooseDrinkClicked}>
                <img className={styles.chooseDrinkIcon} src={props.drink.image}></img>
                    <div className={styles.chooseDrinkText}>
                        <div>name: {props.drink.name}</div>    
                        <div>price: {props.drink.price}</div>    
                    </div>
                </div>           
            }
            {isBlock &&
                <div className={styles.chooseDrinkBlocked}>
                <img className={styles.chooseDrinkIcon} src={props.drink.image}></img>
                    <div className={styles.chooseDrinkText}>
                        <div>name: {props.drink.name}</div>    
                        <div>price: {props.drink.price}</div>    
                    </div>
                    <div onClick={() => props.UnBlock([props.drink.id])} className={styles.unBlockButton}>UNBLOCK</div>
                </div>           
            }
        </div>

    )
}