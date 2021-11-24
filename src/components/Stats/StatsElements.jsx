import styled from 'styled-components';

export const StatContainer = styled.div`
  color: #fff;
  background: url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') center;
  
  @media screen and  (max-width: 48rem) {
    padding: 100px 0;
  }
`
export const StatWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  height:auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: #FFF;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const Heading = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color:#0AFF99;
    color: #0AEFFF;
    text-align: center;
    @media screen and (max-width: 30rem) {
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

export const StatsWrapper = styled.div`
    max-width: 62.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    padding: 1.5rem 3rem;
    @media screen and (max-width: 62.5rem) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 48rem) {
      grid-template-columns: 1fr;
      padding: 0 1rem;
  }
`
export const StatsCard = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.8rem;
  max-height: 20rem;
  padding: 1.9rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`