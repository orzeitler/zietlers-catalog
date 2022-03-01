import styled from 'styled-components'


export const FooterContainer = styled.footer`
  background: black;
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
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const WebsiteRights = styled.small`
  color: white;
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
  color: white;
  font-size: 24px;
`
