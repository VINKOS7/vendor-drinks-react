
import { v4 as uuidv4 } from 'uuid'
import { Drink } from '../../../models/drink'
import { ChooseDrinkComponent } from './components/ChooseDrinkComponent'
import styles from "./ChooseDrinksComponent.module.scss"

interface ChooseDrinksComponent {
    drinksChoose: Drink[]
    AddDrinksChosen(drink: Drink): void
}

export const ChooseDrinksComponent = (props: ChooseDrinksComponent) => {   
    return (
        <div className={styles.chooseDrinks}>
            {props.drinksChoose.map(d => {
                if(d.quantity > 0) 
                    return <ChooseDrinkComponent 
                                AddDrinksChosen={props.AddDrinksChosen} 
                                drink={d}/>
                            })
            }
        </div>
    )
}