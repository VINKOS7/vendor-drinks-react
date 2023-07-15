import styles from "./ButtonBlockComponent.module.scss"

export interface ButtonDropComponentProps {
    Drop(): void
}

export const ButtonBlockComponent = (props: ButtonDropComponentProps) => {
    return (
        <div>
            <div onClick={props.Drop} className={styles.dropBtn}>
                <div className={styles.dropBtnText}>block</div>
            </div>        
        </div>        
    )
}