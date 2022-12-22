import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <h3>Zaloguj się</h3>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputTitle}>
                        Username:
                    </label>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputTitle}>
                        Password:
                    </label>
                    <input className={styles.input}></input>
                    <a href='/forget' className={styles.forgotPass}>Nie pamiętam hasła</a>
                </div>
                <div>
                    <button type='submit' className={styles.submit}>Zaloguj</button>
                </div>
            </form>
            <form className={styles.registerForm}>
                <h3>Zarejestruj się</h3>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputTitle}>
                        Username:
                    </label>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputTitle}>
                        Email:
                    </label>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.inputTitle}>
                        Password:
                    </label>
                    <input className={styles.input}></input>
                </div>
                <div>
                    <button type='submit' className={styles.submit}>Zarejestruj</button>
                </div>
            </form>
        </div>
        
    )
}

export default Login;