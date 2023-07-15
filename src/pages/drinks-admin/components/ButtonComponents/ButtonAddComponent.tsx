import styles from "./ButtonAddComponent.module.scss"

export interface ButtonAddComponentProps {
    Add(): void

}

export const ButtonAddComponent = (props: ButtonAddComponentProps) => {
    return (
        <div className={styles.buyBtn}>
            <div onClick={props.Add} className={styles.addBtn}>
                <div className={styles.buyBtnText}>add</div>
            </div>
        </div>
    )
}