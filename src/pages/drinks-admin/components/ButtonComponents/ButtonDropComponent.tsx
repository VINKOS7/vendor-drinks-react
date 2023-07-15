import styles from "./ButtonDropComponent.module.scss"

export interface ButtonDropComponentProps {
    Drop(): void
}

export const ButtonDropComponent = (props: ButtonDropComponentProps) => {
    return (
        <div>
            <div onClick={props.Drop} className={styles.dropBtn}>
                <div className={styles.dropBtnText}>drop</div>
            </div>        
        </div>        
    )
}