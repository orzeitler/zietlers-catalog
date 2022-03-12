import React from "react";
import {ItemSlider} from "../index";
import {Typography} from "@mui/material";
import {WhatsApp} from "@material-ui/icons";
import {FavoriteSectionContainer, ActionSection} from "./FavoriteSectionElements";

const FavoriteSection = ({selectedItems}) => {

    const sendWhatsAppMSG = () => {
        let url = "https://api.whatsapp.com/send?phone=972542323392&text=I'm%20interested%20in%20your%20services";
        fetch(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    };

    return (
     <FavoriteSectionContainer>
         <ItemSlider Items={selectedItems} selectedItems={selectedItems}/>
         <ActionSection>
             <Typography>some nice text to explain what next</Typography>
             <a href={`https://api.whatsapp.com/send?phone=972525877694&text=heyIsentthisfrommyapp`} target="_blank">click here</a>
         </ActionSection>
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;