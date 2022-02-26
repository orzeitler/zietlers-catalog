import React, {useState} from 'react';
import './App.css';
import {ItemSlider, MenuDropdown, NavBar, RoomPictureGallery} from './components';
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <Router>
        <MenuDropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <NavBar toggleMenu={toggleMenu}/>
        <RoomPictureGallery/>
        <ItemSlider/>
    </Router>
  );
}

export default App;
