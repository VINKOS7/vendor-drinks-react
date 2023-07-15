import { Coin } from "../../../models/coin"
import styles from "./ChosenCoinComponent.module.scss"
import { ChosenCoin } from "./Models/ChosenCoin"

interface ChosenCoinComponentProps {
    coin: ChosenCoin
}

export const ChosenCoinComponent = (props: ChosenCoinComponentProps) => {
    return (
        <div className={styles.chosenCoin}>
            {props.coin.coin.value + ' ' 
            + props.coin.coin.currency +  ' ' 
            + props.coin.quantity}
            </div>
    )
}