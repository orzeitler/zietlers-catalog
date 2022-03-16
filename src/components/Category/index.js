import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {CategoryContainer, CategoryHeader, CategorySubHeader, CarouselImg, Header} from './Category';
import {ItemSlider} from "../index";

const Category = ({CategoryData, id, selectedItems}) => {

    return (
        <CategoryContainer id={id}>
            <Header>
                <CategoryHeader> {CategoryData.categoryName} </CategoryHeader>
                <CategorySubHeader> {CategoryData.categoryDescription} </CategorySubHeader>
            </Header>
            {CategoryData.roomPictures.length > 0 && <Carousel>
                {CategoryData.roomPictures.map((pic) =>
                    <CarouselImg key={pic.imageSrc}>
                        <img src={pic.imageSrc}/>
                        {pic.description && <p className="legend">{pic.description}</p>}
                    </CarouselImg>
                )}
            </Carousel>}
            <ItemSlider Items={CategoryData.items} selectedItems={selectedItems}/>
        </CategoryContainer>
    )
}

export default Category;