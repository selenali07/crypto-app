import React from "react";
import {
  AboutContainer,
  Heading,
  AboutWrapper,
  Text,
  Column1,
  Column2,
  Subtitle,
} from "./AboutElements";

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: "#020202" }}>
      <AboutContainer>
        <Heading>About</Heading>
        <AboutWrapper>
          <Column1>
            <Subtitle>What is cryptocurrency?</Subtitle>
            <Text>
              A cryptocurrency or{" "}
              <span style={{ color: "#0AEFFF", fontWeight: "bold" }}>
                “crypto”
              </span>{" "}
              is decentralized digital money designed to be used over the
              internet. Crypto makes it possible to transfer value online
              without the need for a middleman like a bank or payment processor.
            </Text>
            <Subtitle>Where does this data come from?</Subtitle>
            <Text>
              The data from this website is retrieved from{" "}
              <a
                style={{
                  color: "#0AEFFF",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                href="https://www.coingecko.com/en/api"
              >
                CoinGecko&nbsp;API
              </a>{" "}
              providing real-time market and analysis such as crypto market cap, trading volume, etc. 
            </Text>
          </Column1>
          <Column2></Column2>
        </AboutWrapper>
      </AboutContainer>
    </section>
  );
};

export default About;
