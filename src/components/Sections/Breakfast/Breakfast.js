import styles from './Breakfast.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column/Column';
import Homebutton from '../../Homebutton/Homebutton';

const Breakfast = () => {

    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch();

    const report = recipeId => {
		dispatch({ type: 'REPORT_RECIPE', payload: recipeId });
	}

    return(
        <div className={styles.container}>
            <Homebutton />
            <div className={styles.content}>
                {recipes.map(recipe => 
                <li key={recipe.id} className={styles.recpie}> 
                    <Column {...recipe} /> 
                    <button onClick={() => report(recipe.id)}>Zgłoś</button> 
                </li>
                )}
            </div>
        </div> 
    )
    
}

export default Breakfast;