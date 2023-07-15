import { ChosenDrink } from "../Models/ChosenDrink"
import styles from "./ChosenDrinkComponent.module.scss"


interface DrinkComponentProps {
    drink: ChosenDrink
}

export const ChosenDrinkComponent = (props: DrinkComponentProps) => {
    return (
        <div className={styles.chosenDrink}>
            <div>
                <div>{props.drink.name}</div>
                <img className={styles.chosenDrinkIcon} src={props.drink.image}></img>
                <div>{props.drink.quantity}</div>
            </div>
        </div>
    )
}