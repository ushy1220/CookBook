import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import styles from './New.module.scss';

const NewForm = () => {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: 'ADD_RECIPE', payload: {title, value, ingredients, content, author} });
        setTitle('');
        setIngredients('');
        setContent('');
        setAuthor('');
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.top}>
                    <div className={styles.nameInput}>
                        <h4 className={styles.title}>Nazwa potrawy</h4>
                        <input type='text' placeholder='Nazwa potrawy' name='title' value={title} onChange={e => setTitle(e.target.value)} required></input>
                    </div>
                    <div className={styles.category}>
                        <h4 className={styles.title}>Kategoria</h4>
                        <select name={styles.options} id="cars">
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
                    </div>
                </div>
                
                <div className={styles.middle}>
                    <div className={styles.ingredientInputs}>
                        <div className={styles.ingredientValue}>
                            <h4 className={styles.title}>Ilość</h4>
                            <input type='text' placeholder='3x / 100g / 100ml' name='value' onChange={e => setValue(e.target.value)} required></input>
                        </div>

                        <div className={styles.ingredientName}>
                            <h4 className={styles.title}>składnik</h4>
                            <input type='text' placeholder='Składnik' name='ingredients' value={ingredients} onChange={e => setIngredients(e.target.value)} required></input>
                        </div>
                        
                        <button type='submit' className={styles.submitIngredient}>OK</button>
                    </div>
                    
                    <div className={styles.ingredientsWrapper}>
                    </div>   
                </div>        
                
                <div className={styles.contentInput}>
                    <h4 className={styles.title}>Przepis</h4>

                    <textarea placeholder='Przepis...' name='content' value={content} onChange={e => setContent(e.target.value)} required></textarea>
                </div>

                <button type='submit' className={styles.submit}>DODAJ</button>
            </form>
        </div>
    )
    
}

export default NewForm;