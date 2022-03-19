import React from "react";
import {ItemSlider} from "../index";
import {Typography} from "@mui/material";
import {FavoriteSectionContainer, ActionSection, EmptyState, BigEmoji, ActionSectionWrapper, IconWrapper, CheckOutExplained} from "./FavoriteSectionElements";
import {RiWhatsappFill} from "react-icons/ri";

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
         <ActionSectionWrapper>
             <a href={`https://api.whatsapp.com/send?phone=972542323392&text=${getSelectedItems()}`} target="_blank">
                 <ActionSection>
                    <CheckOutExplained>לחץ על האיקון כדי לשלוח לנו הודעה עם הפריטים שהתעניינת בהם</CheckOutExplained>
                    <IconWrapper><RiWhatsappFill color={'#25D366'}/></IconWrapper>
                </ActionSection>
             </a>
         </ActionSectionWrapper>
         </> :
             <EmptyState>
                 <BigEmoji>️🤷🏻‍♀️</BigEmoji>
                 לא בחרת שום פריט - תחזור לקטלוג ובחר פריטים על ידי לחיצה על ה❤️ או צור קשר בוואטסאף
             </EmptyState>}
     </FavoriteSectionContainer>
    )
}

export default FavoriteSection;