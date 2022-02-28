import React, {useState} from 'react';
import './App.css';
import {MenuDropdown, NavBar, Category} from './components';
import {BrowserRouter as Router} from 'react-router-dom'
import {CategoryData} from "./Data/CategoryData";

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <Router>
        <MenuDropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <NavBar toggleMenu={toggleMenu}/>
        {CategoryData.map((category) =>
            <Category CategoryData={category} key={category.categoryName}/>
        )}
    </Router>
  );
}

export default App;
