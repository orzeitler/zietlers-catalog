import React from 'react';
import {FooterWrap, FooterContainer, SocialIcons, SocialMedia , SocialMediaWrap, WebsiteRights, SocialIconLink} from './FooterElements'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
              <SocialMedia>
                  <SocialMediaWrap>
                      <WebsiteRights>The Zietlers catalog © 2022 All right reserved</WebsiteRights>
                      <WebsiteRights> I dont do Social - These all lead to Linkedin and Git 🙃 </WebsiteRights>
                      <SocialIcons>
                              <SocialIconLink href={'/'} target={'_blank'} area-label={'Facebook'}>
                                  <FaFacebook/>
                              </SocialIconLink>
                              <SocialIconLink href={'https://www.linkedin.com/in/orr-zeitler-a5a918159/'} target={'_blank'} area-label={'instagram'}>
                                  <FaInstagram/>
                              </SocialIconLink>
                              <SocialIconLink href={'/'} target={'_blank'} area-label={'youtube'}>
                                  <FaGithub/>
                              </SocialIconLink>
                              <SocialIconLink href={'/'} target={'_blank'} area-label={'Linkedin'}>
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