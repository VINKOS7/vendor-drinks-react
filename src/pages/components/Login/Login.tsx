import userManager from '../../../connection/userManager';
import styles from './Login.module.scss';

export const Login = () => {
    const handleLogin = () => {
        userManager.signinRedirect()
    }

    return (
            <div onClick={handleLogin} className={styles.btn}>
                Login
            </div>
    )
}