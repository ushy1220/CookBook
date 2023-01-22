import styles from './App.css';
import Home from './components/Home/Home';
//import Homebutton from './components/Homebutton/Homebutton';
import { Routes, Route } from 'react-router-dom';
import NewRecipe from './components/Sections/NewRecipe/NewRecipe';
import Breakfast from './components/Sections/Breakfast/Breakfast';
import Children from './components/Sections/Children/Children'
import Vegan from './components/Sections/Vegan/Vegan';
import Vegetarian from './components/Sections/Vegetarian/Vegetarian' ;
import Pregnant from './components/Sections/Pregnant/Pregnant';
import Student from './components/Sections/Student/Student';
import Supper from './components/Sections/Supper/Supper';
import Dinner from './components/Sections/Dinner/Dinner';
import Animals from './components/Sections/Animals/Animals';
import NewForm from './components/Sections/NewForm/NewForm';
import Search from './components/Sections/Search/Search';

//import NewForm from './components/Sections/NewForm/NewForm';
//import Login from './components/Login/Login'

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/children" element={<Children />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/newform" element={<NewForm />} />
        <Route path="/newrecipe" element={<NewRecipe />} />
        <Route path="/supper" element={<Supper />} />
        <Route path="/student" element={<Student />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pregnat" element={<Pregnant />} />
        <Route path="/vege" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
      </Routes>
    </div>
  )
}

export default App;

/*
import { Routes, Route } from 'react-router-dom';
import Animals from './components/Sections/Animals/Animals';
import Breakfast from './components/Sections/Breakfast/Breakfast';
import Children from './components/Sections/Children/Children';

<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/children" element={<Children />} />
      </Routes>
*/