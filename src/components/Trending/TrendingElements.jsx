import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background: #101522;
  padding-top: 3rem;
  padding-bottom: 3rem;

 `
export const TrendingWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    padding: 0 3rem;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 1.2rem;
  }
`
export const TrendingCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.8rem;
  max-height: 22rem;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const TrendingIcon = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 0.8rem;

`
export const TrendingH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color:#0AFF99;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const TrendingH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
  padding: 1rem;
  text-align: center;
`
export const TrendingH3 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: .8rem;
`
export const TrendingP = styled.p`
  font-size: 1rem;
  text-align: center;
`


