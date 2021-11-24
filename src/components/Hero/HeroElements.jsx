import styled, {keyframes} from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const bounce = keyframes`
  0%, 100% {transform: translateY(0);}
	50% {transform: translateY(0.5rem);}
`
export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: url("./images/background.jpeg");
  background-repeat:no-repeat;
  background-size: cover;
  animation: ${bounce} 20s infiinite;
`
export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 75rem;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroP = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 35rem;
`
export const HeroBtnWrapper = styled.div`
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.3rem;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.3rem;
`
export const typing= keyframes`
  from { width: 0 }
  to { width: 10ch }
`

export const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #FFD300}
`

export const H1 = styled.h1`
  color: #fff;
  overflow: hidden; 
  border-right: .05em solid yellow; 
  white-space: nowrap; 
  margin: 0 auto;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 62rem) {
    font-size: 1.8rem;
    border-right: .05em solid #FFD300; 

  }

  animation: 
    ${typing} 4s steps(15, end),
    ${blink} 1s step-end infinite;
`