import React from 'react';
import './App.css';
import {ItemSlider, NavBar, RoomPictureGallery } from './components';
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {

    return (
    <Router>
        <NavBar/>
        <RoomPictureGallery/>
        <ItemSlider/>
    </Router>
  );
}

export default App;
