import React from "react";
import chair from '../../images/chair.webp'
import table from '../../images/table.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {CarouselImg, CategoryContainer, CategoryHeader, CategorySubHeader} from './CategoryPictureCarouselElements';

const images = [
    {
        name: "Random Name #1",
        image: chair
    },
    {
        name: "Random Name #2",
        image: table
    }
]

const CategoryPictureCarousel = () => {

    return (
        <CategoryContainer>
        <CategoryHeader> הסלון </CategoryHeader>
        <CategorySubHeader> וגם כמה רהיטים אחרים מהבית </CategorySubHeader>
            <Carousel>
            <div>
                <CarouselImg src={chair} />
                <p className="legend">תיאור כלשהוא</p>
            </div>
            <div>
                <CarouselImg src={chair} />
                <p className="legend">עוד אפשרות לטקסט</p>
            </div>
            <div>
                <CarouselImg src={chair} />
            </div>
        </Carousel>
        </CategoryContainer>
    )
}

export default CategoryPictureCarousel;