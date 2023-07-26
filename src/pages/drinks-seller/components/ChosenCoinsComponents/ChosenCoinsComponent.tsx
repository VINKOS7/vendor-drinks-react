import { Coin } from "../../models/coin"
import { ChosenCoinComponent } from "./components/ChosenCoinComponent"
import styles from "./ChosenCoinsComponent.module.scss"
import { ChosenCoin } from "./components/Models/ChosenCoin"
interface ChosenCoinsComponent {
    coins: Coin[]
}

export const ChosenCoinsComponent = (props: ChosenCoinsComponent) => {
    const chosenCoins = [] as ChosenCoin[]

    if(props.coins.length !== 0) {     
        props.coins.forEach(c => {
            const idx = chosenCoins.findIndex(coin => c.value === coin.coin.value)

            if(idx === -1)
            chosenCoins.push({
                    coin: c, 
                    quantity:  props.coins.filter(coin => coin.value === c.value).length
                })           
            else chosenCoins[idx].quantity = props.coins.filter(coin => coin.value === c.value).length   
        })
    }

    return (
        <div className={styles.chosenCoins}>
            { chosenCoins.map((c, key)=> <ChosenCoinComponent key={key} coin={c}/>) }
        </div>
    )
}