import styles from './App.css';
//import Home from './components/Home/Home';
import Homebutton from './components/Homebutton/Homebutton';
import Breakfast from './components/Sections/Breakfast/Breakfast';
import New from './components/Sections/New/New';
//import Login from './components/Login/Login'

function App() {
  return (
    <div className={styles.container}>
      <Homebutton />
      <New />
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