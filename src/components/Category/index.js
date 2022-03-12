import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {CategoryContainer, CategoryHeader, CategorySubHeader, CarouselImg} from './Category';
import {ItemSlider} from "../index";

const Category = ({CategoryData, id, selectedItems}) => {

    return (
        <CategoryContainer id={id}>
            <CategoryHeader> {CategoryData.categoryName} </CategoryHeader>
            <CategorySubHeader> {CategoryData.categoryDescription} </CategorySubHeader>
            <Carousel>
                {CategoryData.roomPictures.map((pic) =>
                    <CarouselImg key={pic.imageSrc}>
                        <img src={pic.imageSrc}/>
                        {pic.description && <p className="legend">{pic.description}</p>}
                    </CarouselImg>
                )}
            </Carousel>
            <ItemSlider Items={CategoryData.items} selectedItems={selectedItems}/>
        </CategoryContainer>
    )
}

export default Category;