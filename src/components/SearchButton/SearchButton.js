import styles from './SearchButton.module.scss';

const SearchButton = () => {

    return (
        <div className={styles.container}>
            <a href='/search' className={styles.link}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    );
}

export default SearchButton;