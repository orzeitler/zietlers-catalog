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
             <a href={`https://api.whatsapp.com/send?phone=972525877694&text=heyIsentthisfrommyapp`} target="_blank"><WhatsApp/>click here</a>
         </ActionSection>
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;