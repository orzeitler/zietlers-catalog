import React from "react";
import {ItemSlider} from "../index";
import {Typography} from "@mui/material";
import {WhatsApp} from "@material-ui/icons";
import {FavoriteSectionContainer, ActionSection} from "./FavoriteSectionElements";


const FavoriteSection = ({selectedItems}) => {

    return (
     <FavoriteSectionContainer>
         <ItemSlider Items={selectedItems} selectedItems={selectedItems}/>
         <ActionSection>
             <Typography>some nice text to explain what next</Typography>
             <WhatsApp/>
         </ActionSection>
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;