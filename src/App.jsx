import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/index";
import CheckOut from "./pages/checkOut";
import Footer from "./components/Footer";

const App = () => {

    return (
    <Router>
        <Routes>
            <Route path={'/'} element={<Home/>} exact />
            <Route path={'/checkOut'} element={<CheckOut/>} exact />
        </Routes>
        <Footer/>
    </Router>
);
}

export default App;
