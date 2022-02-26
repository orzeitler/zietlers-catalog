import React from "react";
import chair from '../../images/chair.webp'
import table from '../../images/table.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import useStyles from './styles';

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

    const classes = useStyles();

    return (
        <div>
        <Carousel>
            <div>
                <img src={chair} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={chair} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={chair} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </div>
    )
}

export default CategoryPictureCarousel;