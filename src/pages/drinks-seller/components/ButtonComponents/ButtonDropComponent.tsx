import styles from "./ButtonDropComponent.module.scss"

export interface ButtonDropComponentProps {
    price: number
    money: number
    Drop(): void
}

export const ButtonDropComponent = (props: ButtonDropComponentProps) => {
    const sum = props.price + props.money

    return (
        <div>
            {sum > 0 && 
                <div onClick={props.Drop} className={styles.dropBtn}>
                    <div className={styles.dropBtnText}>drop</div>
                </div>}          
        </div>
        
    )
}