import React, {useState} from 'react';
import './App.css';
import {MenuDropdown, NavBar, Category} from './components';
import {BrowserRouter as Router} from 'react-router-dom'

const CategoryArray = {

}

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <Router>
        <MenuDropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <NavBar toggleMenu={toggleMenu}/>
        <Category/>
    </Router>
  );
}

export default App;
