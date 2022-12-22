import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className="col">
                <a href="/new" className={styles.link}>
                    <button className={styles.button}>Nowe (Oceń!)</button>
                </a>
                <a href="/breakfast" className={styles.link}>
                    <button className={styles.button}>Śniadania</button>
                </a>
                <a href="/dinner" className={styles.link}>
                    <button className={styles.button}>Obiady</button>
                </a>
                <a href="/supper" className={styles.link}>
                    <button className={styles.button}>Kolacje</button>
                </a>
                <a href="/student" className={styles.link}>
                    <button className={styles.button}>Studenckie</button>
                </a>
            </div>
            <div className='col'>
                <a href="/children" className={styles.link}>
                    <button className={styles.button}>Dla dzieci</button>
                </a>
                <a href="/pregnat" className={styles.link}>
                    <button className={styles.button}>Dla kobiet w ciąży</button>
                </a>
                <a href="/vege" className={styles.link}>
                    <button className={styles.button}>Wegetariańskie</button>
                </a>
                <a href="/vegan" className={styles.link}>
                    <button className={styles.button}>Wegańskie</button>
                </a>
                <a href="/animals" className={styles.link}>
                    <button className={styles.button}>Dla zwierząt</button>
                </a>
            </div>
        </div>
    )
}

export default Home;

/*

*/