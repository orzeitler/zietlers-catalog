import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/index";
import CheckOut from "./pages/checkOut";
import Footer from "./components/Footer";

let selectedItems = [];

const App = () => {

    return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home selectedItems={selectedItems}/>} />
            <Route exact path={'/checkOut'} element={<CheckOut selectedItems={selectedItems}/>} />
        </Routes>
        <Footer/>
    </Router>
);
}

export default App;
