import styled from 'styled-components'

export const FavoriteSectionContainer = styled.div`
    background: lightgray;
    position: relative;
    display: block;
    margin-top: 80px;
    padding: 0 40px;
    z-index: 1;
`

export const ActionSection = styled.div`
    height: 150px;
    margin: 0 20px;
    border-radius: 30px;
    border: 2px black solid;
    background: white;
    display: grid;
    grid-template-columns: auto auto;
    direction: rtl;
    text-decoration: none;
`

export const EmptyState = styled.div`
    height: 450px;
    background: #FCF8F3;
    padding: 50px;
    text-align: center;
    font-family: Assistant;
    font-size: 18px;
`

export const BigEmoji = styled.div`
  font-size: 120px;
`

export const ActionSectionWrapper = styled.div`
  font-family: Assistant;
  background: #FCF8F3;
  
  a {
    text-decoration: none;
  }
`

export const CheckOutExplained = styled.div`
  font-family: Assistant;
  color: black;
  padding: 20px;
  align-self: center;
`

export const IconWrapper = styled.div`
    align-self: center;
    padding: 20px;
    font-size: 50px;
`
