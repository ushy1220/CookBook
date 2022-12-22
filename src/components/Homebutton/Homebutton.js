import styles from './Homebutton.module.scss'

const Homebutton = () => {
    return (
        <div className={styles.container}>
            <a href="/" className={styles.link}>
            <i className="fa-solid fa-house"></i>
            </a>
        </div>
    )
}

export default Homebutton;