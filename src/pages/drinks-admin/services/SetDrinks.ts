import { v4 as uuidv4 } from 'uuid'
import { Drink } from '../../models/drink'

interface SetDrinksProps {
    drinks: Drink[]
}

export const SetDrinks = (props: SetDrinksProps) => {
    const data = localStorage.getItem('drinks')
    const drinks: Drink[] = []

    if(data) drinks.concat(JSON.parse(data) as Drink[])

    localStorage.setItem('drinks', JSON.stringify(drinks.concat(props.drinks)))
    
}