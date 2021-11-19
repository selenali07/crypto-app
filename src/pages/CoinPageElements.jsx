import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const CoinWrapper = styled.article`
  display: grid;
  width: 100vw;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 1rem 0;
  background: #101522;
  grid-template-columns: 1fr 3fr;
  margin-top: 80px;

  @media (max-width: 47.9375rem) {
    grid-template-columns: 1fr;
  }
`;

export const ChartContainer = styled.section`
  max-width: 45rem;
  width: 95vw;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
`;
export const CoinInfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CoinHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const CoinName = styled.h1`
  font-size: 2rem;
`;
export const P = styled.section`
  background: #101522;
  display: flex;
  justify-content: center;
`;
export const CoinDesc = styled.p`
  font-size: 1.2rem;
  color: white;
  max-width: 45rem;
  justify-self: center;
  font: 1.2rem/ 1.8rem Helvetica, sans-serif;
  a {
    color: rebeccapurple;
  }
`;

export const NavCoinPage = styled.nav`
  height: 80px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  background: #fff;
  box-shadow: 0px 0.9rem .7rem -0.9rem #111;
  a{
    color: black;
  }
`
export const NavCoinPageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;

  svg{
    color: #212121;
    font-size: 2.5rem;
  }

`
export const NavLogo = styled(LinkR) `
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`