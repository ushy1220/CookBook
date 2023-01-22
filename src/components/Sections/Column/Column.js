import styles from './Column.module.scss';

const Column = (props) => {
    return (
        <article className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className={styles.section}>{props.section}</h3>
            <h3 className={styles.ingredients}>{props.ingredients.value} {props.ingredients.name}</h3>
            <p className={styles.content}>{props.content}</p>
            <span className={styles.author}>{props.author}</span>
        </article>
    )
}

export default Column;