import React from 'react';
import './App.css';
import {ItemSlider, NavBar, RoomPictureGallery } from './components';
//import {Browser as Router} from 'react-router-dom'

const App = () => {

    const addToCart = (Item) => {
        console.log('item added to cart' + Item)
    }

    return (
    <div>
        <NavBar/>
        <RoomPictureGallery/>
        <ItemSlider onAddToCart={addToCart}/>
    </div>
  );
}

export default App;
