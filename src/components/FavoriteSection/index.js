import React from "react";
import {ItemSlider} from "../index";
import {Typography} from "@mui/material";
import {WhatsApp} from "@material-ui/icons";
import {FavoriteSectionContainer, ActionSection, EmptyState} from "./FavoriteSectionElements";

const FavoriteSection = ({selectedItems}) => {

    const addSpacesToUrl = (str) => {
        return str.replace(/' '/g, "%20")
    }


    const getSelectedItems = () => {
        if(selectedItems.length > 0) {
            let resultString = ' היי! ראיתי את הקטלוג המגניב והתעניינתי בפריטים הבאים: ';
            selectedItems.map(item => {
                resultString = resultString.concat(item.name + ', ')
            } )
            return addSpacesToUrl(resultString)
        } else {
            return addSpacesToUrl('היי! ראיתי את הקטלוג המגניב שלכם!');
        }
    }

    return (
     <FavoriteSectionContainer>
         {(selectedItems.length > 0) ? <><ItemSlider Items={selectedItems} selectedItems={selectedItems}/>
         <ActionSection>
             <Typography>לחיצה על האיקון למטה תשלח לנו הודעה עם הפריטים שבהם התעניינת</Typography>
             <a href={`https://api.whatsapp.com/send?phone=972542323392&text=${getSelectedItems()}`} target="_blank"><WhatsApp/>click here</a>
         </ActionSection></> : <EmptyState>לא בחרת שום פריט - תחזור לקטלוג ובחר פריטים על ידי לחיצה על הלב הקטן או צור קשר בוואטס אף על ידי לחיצה על הכפתור למטה</EmptyState>}
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;