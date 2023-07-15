import styles from "./ButtonBuyComponent.module.scss"

export interface ButtonBuyComponentProps {
    price: number
    money: number
    Buy(): void
}

export const ButtonBuyComponent = (props: ButtonBuyComponentProps) => {
    const difference = props.price - props.money

    return (
        <div className={styles.buyBtn}>
            {difference <= 0 && props.price > 0 &&
                <div onClick={props.Buy} className={styles.buyBtnActive}>
                    <div className={styles.buyBtnText}>buy</div>
                </div>
            }
            {difference > 0 && 
                <div className={styles.buyBtnNotEnoughMoney}>
                    <div className={styles.buyBtnText}>lacks
                        money</div>
                </div>
            }       
        </div>
    )
}