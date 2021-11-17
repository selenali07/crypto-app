import styled from 'styled-components';

export const EventContainer = styled.div`
  color: #fff;
  background: #000;

  @media screen and  (max-width: 48rem) {
    padding: 100px 0;
  }
`
export const EventWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const EventRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 48rem) {
    grid-template-areas: 'col1 col1' 'col2 col2'
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: #0AEFFF;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color:#0AFF99;
    text-align: center;
    @media screen and (max-width: 480px) {
    font-size: 2rem;
    }  
`

export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`


export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  width: 10rem;
  margin: 0 0 10px 0;
  padding: 0;
`;
