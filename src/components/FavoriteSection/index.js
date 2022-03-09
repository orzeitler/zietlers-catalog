import React from "react";
import {ItemSlider} from "../index";
import {Typography} from "@mui/material";
import {WhatsApp} from "@material-ui/icons";
import {FavoriteSectionContainer, ActionSection} from "./FavoriteSectionElements";
import {CategoryData} from "../../Data/CategoryData";


const FavoriteSection = () => {

    return (
     <FavoriteSectionContainer>
         <ItemSlider Items={CategoryData[0].items}/>
         <ActionSection>
             <Typography>some nice text to explain what next</Typography>
             <WhatsApp/>
         </ActionSection>
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;