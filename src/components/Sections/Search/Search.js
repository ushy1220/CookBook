import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <form>
                    <h4>Tytuł</h4>
                    <input></input>

                    <h4>Kategoria</h4>
                    <select name={styles.options} id="categories">
                        <option value="breakfast">Śniadania</option>
                        <option value="dinner">Obiady</option>
                        <option value="supper">Kolacje</option>
                        <option value="student">Studenckie</option>
                        <option value="children">Dla dzieci</option>
                        <option value="pregnat">Dla kobiet w ciąży</option>
                        <option value="vege">Wegetariańskie</option>
                        <option value="vegan">Wegańskie</option>
                        <option value="animals">Dla zwierząt</option>
                    </select>

                    <h4>Składniki</h4>
                    <input></input>
                    <div className={styles.ingredientsWrapper}>

                    </div>
                </form>
            </div>

            <div className={styles.resoults}>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Search;