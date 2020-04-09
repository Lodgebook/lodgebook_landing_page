import React from "react"
import styled from "styled-components"
import TrashBin from "../images/trash-bin.svg"
import MessyBed from "../images/messy-bed.svg"
import BrokenPencil from "../images/broken-pencil.svg"
import DownArrow from "../images/down-arrow-black.svg"

const BackstoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  position: relative;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: normal;
  line-height: 130%;
  margin-bottom: 3rem;
  text-align: center;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  margin: 0rem 5.8rem;
  @media only screen and (max-width: 480px) {
    margin: 2rem 3rem;
    width: 19rem;
  }
`

const Icon = styled.img`
  height: 6rem;
  width: 6rem;
  @media only screen and (max-width: 480px) {
    height: 8rem;
    width: 8rem;
  }
`

const IconText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  width: ${props => props.containerWidth};
  @media only screen and (max-width: 480px) {
    font-size: 1.7rem;
    line-height: 1.5;
    width: ${props => props.containerWidthMobile};
  }
`
const BottomImage = styled.img`
  height: 3rem;
  width: 3rem;
  margin-top: 4rem;
`

const iconsData = [
  {
    image: TrashBin,
    description: "Requests from guests are easily forgotten.",
    containerWidth: "10rem",
    containerWidthMobile: "80%",
  },
  {
    image: BrokenPencil,
    description:
      "Written tasks aren't traceable, leading to unfinished business.",
    containerWidth: "10rem",
    containerWidthMobile: "90%",
  },
  {
    image: MessyBed,
    description:
      "Improper maintenance results in high costs and low-quality rooms.",
    containerWidth: "11rem",
    containerWidthMobile: "100%",
  },
]

const icons = iconsData.map(icon => (
  <IconContainer>
    <Icon src={icon.image} />
    <IconText
      containerWidthMobile={icon.containerWidthMobile}
      containerWidth={icon.containerWidth}
    >
      {icon.description}
    </IconText>
  </IconContainer>
))

const Backstory = () => (
  <BackstoryContainer>
    <Title>
      Unorganized processes and poor communication lead to negative guest
      reviews.
    </Title>
    <IconsContainer>{icons}</IconsContainer>
    <BottomImage src={DownArrow} />
  </BackstoryContainer>
)

export default Backstory
