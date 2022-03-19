import styled from 'styled-components'
import {MdArrowDownward, MdKeyboardArrowLeft} from "react-icons/md";
import {Link} from 'react-scroll';

export const IntroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  direction: rtl;
  font-family: Assistant;
`

export const IntroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const IntroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IntroH1 = styled.h1`
  color: gray;
  font-size: 48px;
  text-align: center;
  
  @media screen and  (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const IntroP = styled.p`
  margin-top: 24px;
  color: gray;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and  (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const IntroButton = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`

export const Button = styled(Link)`
  border-radius: 50px;
  direction: rtl;
  background: darkgreen;
  white-space: nowrap;
  padding: 12px 30px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lightgreen;
  }
`


