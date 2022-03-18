import React from 'react';
import {FooterWrap, FooterContainer, SocialIcons, SocialMedia , SocialMediaWrap, WebsiteRights, SocialIconLink, MapLink, ContactOptions, PhoneLink, SmileyWrapper} from './FooterElements'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {Phone, PinDrop} from "@material-ui/icons";
import {FiMapPin} from "react-icons/fi";

const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
              <ContactOptions>
                  <MapLink href={'https://www.google.co.il/maps/@32.8558798,35.2346959,19.36z'}>
                      <FiMapPin/>
                      הכתובת שלנו במנוף
                  </MapLink>
                  <SmileyWrapper>
                      🙃
                  </SmileyWrapper>
                  <PhoneLink>
                      <Phone/>
                      +97254-232-3392
                  </PhoneLink>
              </ContactOptions>
              <SocialMedia>
                  <SocialMediaWrap>
                      <WebsiteRights>The Zietlers catalog © 2022 All right reserved</WebsiteRights>
                      <WebsiteRights> I dont do Social - These all lead to Linkedin </WebsiteRights>
                      <SocialIcons>
                              <SocialIconLink href={'https://www.linkedin.com/in/orr-zeitler-a5a918159/'} target={'_blank'} area-label={'Facebook'}>
                                  <FaFacebook/>
                              </SocialIconLink>
                              <SocialIconLink href={'https://www.linkedin.com/in/orr-zeitler-a5a918159/'} target={'_blank'} area-label={'instagram'}>
                                  <FaInstagram/>
                              </SocialIconLink>
                              <SocialIconLink href={'https://www.linkedin.com/in/orr-zeitler-a5a918159/'} target={'_blank'} area-label={'youtube'}>
                                  <FaGithub/>
                              </SocialIconLink>
                              <SocialIconLink href={'https://www.linkedin.com/in/orr-zeitler-a5a918159/'} target={'_blank'} area-label={'Linkedin'}>
                                  <FaLinkedin/>
                              </SocialIconLink>
                          </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer;