import React, {useState} from 'react'
import {CategoryData} from "../Data/CategoryData";
import {Category, IntroSection, MenuDropdown, NavBar} from "../components";
import Footer from "../components/Footer";

const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
   <>
       <MenuDropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
       <NavBar toggleMenu={toggleMenu}/>
       <IntroSection/>
       {CategoryData.map((category) =>
        <Category CategoryData={category} key={category.categoryName} id={category.categoryName}/>
        )}
    </>
  )
}

export default Home;