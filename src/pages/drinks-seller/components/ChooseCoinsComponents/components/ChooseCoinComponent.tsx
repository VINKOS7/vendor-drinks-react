import { Coin } from "../../../models/coin"
import styles from "./ChooseCoinComponent.module.scss"

interface ChooseCoinComponentProps {
    coin: Coin
    AddCoinsChosen(coin: Coin): void
}

export const ChooseCoinComponent = (props: ChooseCoinComponentProps) => {
    return (
        <div onClick={() => props.AddCoinsChosen(props.coin)} className={styles.chooseCoin}>
            <div className={styles.chooseCoinText}>
                {props.coin.value + ' ' + props.coin.currency}
            </div>
        </div>
    )
}