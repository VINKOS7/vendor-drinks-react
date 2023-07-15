import { Coin } from "../../models/coin"
import { ChooseCoinComponent } from "./components/ChooseCoinComponent"
import styles from "./ChooseCoinsComponent.module.scss"

interface ChooseCoinsComponentProps {
    AddCoinsChosen(coin: Coin): void
}

export const ChooseCoinsComponent = (props: ChooseCoinsComponentProps) => {
    const GetCoins = () => {
        return [
            {value: 1, currency: "Ruble"},
            {value: 2, currency: "Ruble"},
            {value: 5, currency: "Ruble"},
            {value: 10, currency: "Ruble"},
        ] as Coin[]
    }

    return (
        <div className={styles.chooseCoins}>
            {GetCoins().map(c => <ChooseCoinComponent AddCoinsChosen={props.AddCoinsChosen} coin={c}/>)}
        </div>
    )
}