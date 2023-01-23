import axios from "axios" //npm install axios --save
import { useEffect, useState } from "react";
import styles from './Breakfast.module.scss';
import Homebutton from '../../Homebutton/Homebutton';
import NewRecipeButton from '../../NewRecipeButton/NewRecipeButton';
import Modal from 'react-modal';

export default function Breakfast() {

    // Modal
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          height: '600px',
          width: '900px',
          color: 'white',
          background: 'black'
        },
    };

    Modal.setAppElement('#root');

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal =()=> {
        setIsOpen(true);
    }

    const afterOpenModal =()=> {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal =()=> {
        setIsOpen(false);
    }

    // Api
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        getRecipe();
    }, []);
 
    const getRecipe =()=> {
        axios.get('http://localhost/CookBook_api/').then(function(response) {
            console.log(response.data);
            setRecipe(response.data);
        });
    }
 
    const deleteRecipe = (id) => {
        axios.delete(`http://localhost/CookBook_api/${id}/delete`).then(function(response){
            console.log(response.data);
            getRecipe();
        });
    }
    return (
        <div className="row">
            <Homebutton />
            <NewRecipeButton />
            <div className="col-12 box">
            <h1 className={styles.header}>Śniadania</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th className="col-0.5">#</th>
                        <th className="col-1.5">Photo</th>
                        <th className="col-2">Title</th>
                        <th className="col-4">Ingredients</th>
                        <th className="col-1">Author</th>
                        <th className="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe.map((rec, key) =>
                        <tr key={key}>
                            <td>{rec.id}</td>
                            <td>{rec.photos}</td>
                            <td>{rec.name}</td>
                            <td>{rec.ingredients}</td>
                            <td>{rec.author}</td>
                            <td>
                                <button className="btn btn-success" onClick={openModal}>Show</button>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                    className={styles.modal}
                                >
                                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={styles.modalTitle}>{rec.name}</h2>
                                    <button onClick={closeModal} className={styles.closeModal}>X</button>
                                    <div className={styles.modalIngredients}>{rec.ingredients}</div>
                                    <div className={styles.modalRecipe}>{rec.recipe}</div>
                                    
                                </Modal>

                                <button onClick={() => deleteRecipe(rec.id)} className="btn btn-danger">Delete</button>

                            </td>
                        </tr>
                    )}
                     
                </tbody>
            </table>
            </div>
        </div>
    )
}


/*
import styles from './Breakfast.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column/Column';
import Homebutton from '../../Homebutton/Homebutton';
import NewRecipeButton from '../../NewRecipeButton/NewRecipeButton';
import { useEffect, useState } from "react";
import axios from "axios" 

const Breakfast = () => {

    const recipes = useSelector(state => state.Breakfast)
    const dispatch = useDispatch();

    const report = recipeId => {
		dispatch({ type: 'REPORT_RECIPE', payload: recipeId });
	}

    return(
        <div className={styles.container}>
            <Homebutton />
            <NewRecipeButton />
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
*/