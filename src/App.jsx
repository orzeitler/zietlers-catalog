import React, {useState} from 'react';
import './App.css';
import {MenuDropdown, NavBar, Category, IntroSection} from './components';
import {BrowserRouter as Router} from 'react-router-dom'
import {CategoryData} from "./Data/CategoryData";
import Footer from "./components/Footer";

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <Router>
        <MenuDropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <NavBar toggleMenu={toggleMenu}/>
        <IntroSection/>
        {CategoryData.map((category) =>
            <Category CategoryData={category} key={category.categoryName}/>
        )}
        <Footer/>
    </Router>
  );
}

export default App;
