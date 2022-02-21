import React from 'react';
import './App.css';
import {ItemSlider, NavBar, RoomPictureGallery } from './components';
//import {Browser as Router} from 'react-router-dom'

const App = () => {

    return (
    <div>
        <NavBar/>
        <RoomPictureGallery/>
        <ItemSlider/>
    </div>
  );
}

export default App;
