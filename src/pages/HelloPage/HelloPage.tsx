import { useNavigate } from "react-router-dom";
import styles from "./HelloPage.module.scss"

export const HelloPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.HelloPage} onClick={() => navigate("/drinks")}>
            <div className={styles.GoButton}>GO TO DRINKS!</div>
        </div>
    )
}