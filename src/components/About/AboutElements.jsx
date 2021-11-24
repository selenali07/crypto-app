import { keyframes } from "styled-components";
import styled from "styled-components";

export const bounce = keyframes`
  0%, 100% {transform: translateY(0);}
	50% {transform: translateY(0.5rem);}
`
export const AboutContainer = styled.div`
  color: #fff;
  max-width: 56.25rem;
  margin: 0 auto;
  padding-top: 6rem;
`;
export const AboutWrapper = styled.article`
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 6rem;

  @media (max-width: 47.9375rem){
    flex-direction: column;
  }
`;

export const Column1 = styled.section`
  margin: 1rem;
  text-align: left;
  flex: 1;

`;
export const Column2 = styled.section`
  margin: 1rem auto;
  flex: 1;
  margin: 0 auto;
  background: url("./images/satellite.jpeg");
  background-size: 110%;
  background-repeat: no-repeat;
  position: relative;
  animation: ${bounce} 6s infinite;

  @media (max-width: 47.9375rem) {
    min-height:20rem;
    width: 100vw;
  }
`;

export const Text = styled.p`
  color: #bbb;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #0aff99;
  text-align: left;
  margin:0 1rem;
  @media screen and (max-width: 30rem) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem auto;
  color: white;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  width: 10rem;
  margin: 0 0 0.625rem 0;
  padding: 0;
`;
