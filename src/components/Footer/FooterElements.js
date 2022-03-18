import styled from 'styled-components'


export const FooterContainer = styled.footer`
  background: #F3F2F1;
`

export const FooterWrap = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto auto;
`

export const ContactOptions = styled.div`
  display: grid;
  grid-template-columns: auto 20px auto;
  grid-gap: 50px;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    grid-gap: 10px;

  }
  
`

export const MapLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 7px;
  font-family: Assistant;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`

export const PhoneLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  font-family: Assistant;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

`

export const SmileyWrapper = styled.div`
  align-self: center;
`


export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  flex-direction: column;
`

export const WebsiteRights = styled.small`
  color: black;
  font-size: 16px;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
`
