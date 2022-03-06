import React, {useState} from "react";
import {IntroBg, VideoBg, IntroContainer, IntroContent, IntroP, IntroH1, ArrowRight, ArrowForward, IntroButton, Button} from './IntroSectionElements'
import Video from '../../images/videio.mp4'


const IntroSection = () => {

    const [hover, setHover] = useState(false) ;

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <IntroContainer>
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type={'video/mp4'}/>
            </IntroBg>
            <IntroContent>
                <IntroH1> תכף נשוב - בעקבות המעבר שלנו בקיץ אנחנו מוכרים את כל מה שלא יבוא איתנו!</IntroH1>
                <IntroP>
                    איך זה עובד - זה רק קטלוג של מה יש והמחיר,
                    אתם מדפדפים רואים משהו שאתם רוצים ויוצרים איתנו קשר.
                    כמו יד 2 אבל עם אנשים שאנחנו מכירים ועל כל מה שאנחנו מוכרים/מוסרים
                </IntroP>
                <IntroButton>
                   <Button to={'category1'} onMouseEnter={onHover} onMouseLeave={onHover}>
                       בוא נתחיל{hover ? <ArrowForward/> : <ArrowRight/>}
                   </Button>
                </IntroButton>
            </IntroContent>
        </IntroContainer>
    )
};

export default IntroSection;