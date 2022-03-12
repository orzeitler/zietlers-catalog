import React from 'react';
import {FavoriteSection, CheckOutHeader} from "../components";

const CheckOut = ({selectedItems}) => {
    return (
        <>
        <CheckOutHeader/>
        <FavoriteSection selectedItems={selectedItems}/>
        </>
    );
};

export default CheckOut;

