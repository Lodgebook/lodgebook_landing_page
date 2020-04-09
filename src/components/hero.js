import React from "react"
import styled from "styled-components"
import DesktopMockupImage from "../images/desktop-mockup.png"
import MobileMockupImage from "../images/mobile-mockup.png"
import colors from "../colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroContainer = styled.div`
  margin-top: 4.5rem;
  margin-left: 11rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem 1rem;
  }
`

const HeadlineContainer = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ImageContainer = styled.div`
  margin-left: -4rem;
  width: 42rem;
  position: relative;
  flex-shrink: 0;
`

const DesktopMockup = styled.img`
  width: 42rem;
  position: absolute;
  bottom: -5rem;
  right: -1rem;
  z-index: 1;
  @media only screen and (max-width: 480px) {
    bottom: 15rem;
  }
`

const MobileMockup = styled.img`
  width: 14rem;
  bottom: -5.5rem;
  left: 2rem;
  position: absolute;
  z-index: 2;
  @media only screen and (max-width: 480px) {
    bottom: 15rem;
  }
`

const MainHeadline = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 2.2rem;
  font-weight: normal;
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 4.7rem;
  }
`

const SupportingHeadline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.2rem;
  font-weight: normal;
  line-height: 1.3;
  width: 90%;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 22rem;
    font-size: 2rem;
  }
`

const CircularBackground = styled.div`
  border-radius: 240px;
  background-color: ${colors.LODGEBOOK_BLUE_LIGHT};
  height: 21rem;
  width: 21rem;
  opacity: 0.1;
  position: absolute;
  right: 3rem;
  bottom: -1rem;
  z-index: 0;
  @media only screen and (max-width: 480px) {
    height: 38rem;
    width: 38rem;
    bottom: 20rem;
    right: -3rem;
  }
`

const CTAButton = styled.button`
  font-size: 1rem;
  font-style: normal;
  line-height: 110%;
  cursor: pointer;
  width: 10rem;
  height: 3.5rem;
  border: none;
  color: white;
  margin-bottom: 2.2rem;
  background-color: ${colors.LODGEBOOK_ACCENT};
  padding: 0.5rem 1.2rem;
  outline: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 0px 15px rgba(50, 178, 174, 0.5);
  }
  @media only screen and (max-width: 480px) {
    width: 14rem;
    height: 5.5rem;
    font-size: 1.5rem;
    box-shadow: 0 0px 15px rgba(50, 178, 174, 0.5);
  }
`

const Hero = () => (
  <HeroContainer>
    <HeadlineContainer>
      <MainHeadline>Empower your hotel to work smarter.</MainHeadline>
      <SupportingHeadline>
        A simple way to streamline operations and give guests the best
        experience possible.
      </SupportingHeadline>
      <CTAButton onClick={() => scrollTo("#features")}>See features</CTAButton>
    </HeadlineContainer>
    <ImageContainer>
      <MobileMockup src={MobileMockupImage} />
      <DesktopMockup src={DesktopMockupImage} />
      <CircularBackground />
    </ImageContainer>
  </HeroContainer>
)

export default Hero
