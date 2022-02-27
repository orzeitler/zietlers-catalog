import React from "react";
import livingRoom1 from '../../images/gray-living-room-01.jpeg'
import livingRoom2 from '../../images/living-room-2.jpeg'
import livingRoom3 from '../../images/living-room3.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {CategoryContainer, CategoryHeader, CategorySubHeader, CarouselImg} from './CategoryPictureCarouselElements';

const CategoryPictureCarousel = () => {

    return (
        <CategoryContainer>
        <CategoryHeader> הסלון </CategoryHeader>
        <CategorySubHeader> וגם כמה רהיטים אחרים מהבית </CategorySubHeader>
        <Carousel>
            <CarouselImg>
                <img src={livingRoom1}/>
                <p className="legend">תיאור כלשהוא</p>
            </CarouselImg>
            <CarouselImg>
                <img src={livingRoom2} />
                <p className="legend">עוד אפשרות לטקסט</p>
            </CarouselImg>
            <CarouselImg>
                <img src={livingRoom3} />
            </CarouselImg>
        </Carousel>
        </CategoryContainer>
    )
}

export default CategoryPictureCarousel;