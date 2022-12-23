import styles from './Animals.module.scss';
import Homebutton from '../../Homebutton/Homebutton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';

const Animals = () => {

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

export default Animals;