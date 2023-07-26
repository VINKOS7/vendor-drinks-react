import { Drink } from '../../../models/drink'
import { ChosenDrinkComponent } from './components/ChosenDrinkComponent'
import styles from './ChosenDrinksComponent.module.scss'
import { ChosenDrink } from './Models/ChosenDrink'


interface ChosenDrinksComponentProps {
    drinks: Drink[]
}

export const ChosenDrinksComponent = (props: ChosenDrinksComponentProps) => {
    const drinks = [] as ChosenDrink[]

    if(props.drinks.length !== 0){  
        props.drinks.map(d => {
            const quantity = props.drinks.filter(drink => drink.id === d.id).length
            const idx = drinks.findIndex(dr => dr.id == d.id)

            if(idx === -1) drinks.push({id: d.id, name: d.name, image: d.image, quantity: quantity})
            else drinks[idx].quantity = quantity     
        })
    }

    

    return (
        <div  className={styles.chosenDrinks}>
            {drinks.length === 0 && <div>choose drink</div>}
            {drinks.map(d => <ChosenDrinkComponent drink={d}/>)}
        </div>
    )
}