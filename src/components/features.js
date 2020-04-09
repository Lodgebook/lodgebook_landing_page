import React from "react"
import styled from "styled-components"
import AssignIcon from "../images/assign-person.svg"
import ClockIcon from "../images/clock-fast.svg"
import WifiIcon from "../images/disconnected-wifi.svg"
import LanguageIcon from "../images/languages.svg"
import CameraIcon from "../images/phone-camera.svg"
import InspectIcon from "../images/inspect-magifying-glass.svg"
import PuzzleIcon from "../images/integrate-puzzle.svg"
import PrioritizeIcon from "../images/prioritize-reorder.svg"
import TextIcon from "../images/text-message.svg"
import UpdateIcon from "../images/update-arrow.svg"
import BrowserIcon from "../images/web-browser.svg"
import CloudIcon from "../images/cloud.svg"
import FeaturesBackgroundWeb from "../images/features-pattern-web.svg"
import FeaturesBackgroundMobile from "../images/features-pattern-mobile.svg"
import colors from "../colors"

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${FeaturesBackgroundWeb});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 56.3rem;
  margin-top: 3rem;
  @media only screen and (max-width: 480px) {
    background-image: url(${FeaturesBackgroundMobile});
    padding-bottom: 9rem;
  }
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: normal;
  line-height: 110%;
  text-align: center;
  margin-top: 3.5rem;
`

const ColumnTitle = styled.p`
  font-size: 1.5rem;
  line-height: 140%;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 2rem;
  text-align: center;
`

const ColumnsSection = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`

const Feature = styled.div`
  height: 5rem;
  width: 22.5rem;
  padding: 1.5rem;
  background: ${colors.LODGEBOOK_WHITE};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const FeatureIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`

const seamlessFeaturesData = [
  {
    title: "Compatible with most web browsers on mobile and desktop",
    image: BrowserIcon,
  },
  {
    title: "Accessible via a downloadable app on iOS and Android",
    image: CloudIcon,
  },
  {
    title: "Integrate seamlessly with Sabre Property Hub",
    image: PuzzleIcon,
  },
  {
    title: "Receive updates to room and task statuses without refreshing",
    image: ClockIcon,
  },
  {
    title: "Multilingual for English, Spanish, and Chinese users",
    image: LanguageIcon,
  },
  {
    title: "Support offline functionality when  access is limited",
    image: WifiIcon,
  },
]

const powerfulFeaturesData = [
  {
    title: "Update clean and vacancy statuses of rooms in real-time",
    image: UpdateIcon,
  },
  {
    title: "Create, update, and assign tasks to other staff members",
    image: AssignIcon,
  },
  {
    title: "Inspect rooms and report room defects",
    image: InspectIcon,
  },
  {
    title:
      "Send out text SMS alerts when assigning tasks to other staff members",
    image: TextIcon,
  },
  {
    title: "Easily prioritize and manage tasks with preventative maintenance",
    image: PrioritizeIcon,
  },
  {
    title:
      "Take pictures from a mobile device for room issues and task requests",
    image: CameraIcon,
  },
]

const seamlessFeatures = seamlessFeaturesData.map(feature => {
  return (
    <Feature>
      <FeatureIcon src={feature.image} />
      {feature.title}
    </Feature>
  )
})

const powerfulFeatures = powerfulFeaturesData.map(feature => {
  return (
    <Feature>
      <FeatureIcon src={feature.image} />
      {feature.title}
    </Feature>
  )
})

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <Title>Features</Title>
      <ColumnsSection>
        <Column>
          <ColumnTitle>Seamless Technology</ColumnTitle>
          {seamlessFeatures}
        </Column>
        <Column>
          <ColumnTitle>Powerful Functionality</ColumnTitle>
          {powerfulFeatures}
        </Column>
      </ColumnsSection>
    </FeaturesContainer>
  )
}

export default Features
