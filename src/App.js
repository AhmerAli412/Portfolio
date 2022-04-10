
import { useContext } from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import { ThemeContext } from './Context';
import Footer from './Footer';
import Intro from './Intro';
import ProductList from './ProductList';
import Toggle from './Toggle';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : 'white',
     color: darkMode && 'white'}}
     >


    <Toggle/>
      <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
