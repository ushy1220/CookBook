import { legacy_createStore as createStore} from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
          return { ...state, recipes: [...state.recipes, action.payload]}, console.log('recipe has been added');
        case 'REMOVE_RECIPE':
          return { ...state, recipes: state.recipes.filter(recipe => recipe.id !== action.payload)};
      }
  return state;
};

const initialState = {
    recipes: [
        {
          id: 1, 
          section: 'studenckie',
          title: 'Strucel po turkmenistańsku', 
          ingredients: [
            'paprika', 
            'eggs', 
            'french ciasto', 
            '200 gram boczku'],
          content: 
            'Przepis...'
        },
    ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;