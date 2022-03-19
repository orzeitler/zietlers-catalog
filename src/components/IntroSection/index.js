import React, {useState} from "react";
import {IntroBg, VideoBg, IntroContainer, IntroContent, IntroP, IntroH1, ArrowRight, ArrowForward, IntroButton, Button} from './IntroSectionElements'
import Video from '../../images/videio.mp4'
import {RiWhatsappFill} from "react-icons/ri";


const IntroSection = () => {

    const [hover, setHover] = useState(false) ;

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <IntroContainer id={'intro'}>
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type={'video/mp4'}/>
            </IntroBg>
            <IntroContent>
                <IntroH1> בעקבות המעבר שלנו בקיץ אנחנו מוכרים את כל מה שלא יבוא איתנו - ואתם מרוויחים!</IntroH1>
                <IntroP>
                    אז איך זה עובד? - זה רק קטלוג של מה יש.<br/>
                     אתם מדפדפים, מסמנים מה שאתם אוהבים עם ❤️ ויוצרים קשר ב
                    <RiWhatsappFill color={'#25D366'}/>
                    <br/>  כמו יד2 אבל עם אנשים מוכרים וכאן קרוב.
                </IntroP>
                <IntroButton>
                   <Button to={'סלון'}
                           smooth={true}
                           duration={500}
                           spy={true}
                           offset={-80}
                           onMouseEnter={onHover}
                           onMouseLeave={onHover}>
                       יאללה להתחיל!{hover ? <ArrowForward/> : <ArrowRight/>}
                   </Button>
                </IntroButton>
            </IntroContent>
        </IntroContainer>
    )
};

export default IntroSection;