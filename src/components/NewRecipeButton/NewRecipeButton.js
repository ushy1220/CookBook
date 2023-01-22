import styles from './NewRecipeButton.module.scss';

const NewRecipeButton = () => {
    return (
        <div className={styles.container}>
            <a href='/newform' className={styles.link}>
                <i className="fa-solid fa-circle-plus"></i>
            </a>
        </div>
    )
}

export default NewRecipeButton;