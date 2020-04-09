import React, { useState } from "react"
import styled from "styled-components"
import ControlImage from "../images/hotel-magnifying-glass.svg"
import StaffImage from "../images/connected-lines-users.svg"
import PreventativeImage from "../images/changing-light-bulb-phone.svg"
import ServiceImage from "../images/exchanging-heart-star.svg"
import PlusIcon from "../images/plus.svg"
import MinusIcon from "../images/minus.svg"
import arrow from "../images/arrow.svg"
import NavigationDots1 from "../images/navigation-dots-1.svg"
import NavigationDots2 from "../images/navigation-dots-2.svg"
import NavigationDots3 from "../images/navigation-dots-3.svg"
import NavigationDots4 from "../images/navigation-dots-4.svg"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import colors from "../colors"

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: normal;
  line-height: 130%;
  margin-bottom: 3rem;
  text-align: center;
  width: 60%;
`

const DesktopTable = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const BenefitDetails = styled.div`
  padding: 1rem;
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.LODGEBOOK_WHITE_SMOKE};
`

const BenefitSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const BenefitSelector = styled.div`
  width: 18rem;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${props => props.border};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.textcolor};
`

const BenefitImage = styled.img`
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const BenefitImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BenefitMobileIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  filter: ${props => props.filter};
  margin-right: 2.5rem;
`

const BenefitDescription = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  width: 75%;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.3;
    width: 90%;
  }
`

const NavigationDots = styled.img`
  width: 60%;
`

const NavigationArrow = styled.img`
  display: flex;
  justify-content: center;
  width: 35%;
  transform: ${props => props.transform};
  cursor: pointer;
  padding: 0rem 1rem;
`

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  margin-top: 3rem;
`

const BenefitTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`

const BenefitMobileTitle = styled.h2`
  margin-left: 5rem;
`

const MobilePanelsContainer = styled.div`
  width: 100%;
  display: none;
  @media only screen and (max-width: 480px) {
    display: block;
  }
`

const MobileExpansionPanel = styled(ExpansionPanel)`
  font-size: 1.1rem;
`

const MobileExpansionPanelSummary = styled(ExpansionPanelSummary)`
  border: ${props => props.border} !important;
  font-size: 2rem;
  background-color: ${props => props.backgroundcolor} !important;
  color: ${props => props.textcolor} !important;
`

const PanelSummaryContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const MobileExpansionPanelDetails = styled(ExpansionPanelDetails)``

const listOfBenefits = [
  {
    title: "Better Control",
    description:
      "Be in control with complete transparency into hotel operations.",
    image: ControlImage,
    navigation: NavigationDots1,
    backgroundColor: colors.LODGEBOOK_YELLOW,
    textColor: colors.LODGEBOOK_YELLOW_DARK,
    iconFilter:
      "invert(61%) sepia(18%) saturate(6207%) hue-rotate(353deg) brightness(96%) contrast(83%)",
    value: "control",
  },
  {
    title: "Staff Accountability",
    description:
      "Keep staff accountable to tasks and deliver seamless guest experiences.",
    image: StaffImage,
    navigation: NavigationDots2,
    backgroundColor: colors.LODGEBOOK_PINK,
    textColor: colors.LODGEBOOK_PINK_DARK,
    iconFilter:
      "invert(27%) sepia(25%) saturate(3496%) hue-rotate(319deg) brightness(87%) contrast(77%)",
    value: "accountability",
  },
  {
    title: "Service Excellence",
    description: "Prevent bad reviews by never missing a request from a guest.",
    image: ServiceImage,
    navigation: NavigationDots3,
    backgroundColor: colors.LODGEBOOK_BLUE,
    textColor: colors.LODGEBOOK_BLUE_DARK,
    iconFilter:
      "invert(29%) sepia(4%) saturate(7172%) hue-rotate(166deg) brightness(95%) contrast(98%)",
    value: "service",
  },
  {
    title: "Preventative Maintenance",
    description:
      "Increase the value of your rooms with preventative maintenance.",
    image: PreventativeImage,
    navigation: NavigationDots4,
    backgroundColor: colors.LODGEBOOK_ORANGE,
    textColor: colors.LODGEBOOK_ORANGE_DARK,
    iconFilter:
      "invert(25%) sepia(94%) saturate(1701%) hue-rotate(354deg) brightness(90%) contrast(91%)",
    value: "maintenance",
  },
]

const Benefits = () => {
  const [benefitSelectedDesktop, setBenefitDesktop] = useState(
    listOfBenefits[0].value
  )
  const [benefitSelectedMobile, setBenefitMobile] = useState("")
  const [benefitDescription, setBenefitDescription] = useState(
    listOfBenefits[0].description
  )
  const [benefitImage, setBenefitImage] = useState(listOfBenefits[0].image)
  const [navigationImage, setNavigationImage] = useState(NavigationDots1)

  const handleSelectBenefitDesktop = benefit => {
    setBenefitDesktop(benefit.value)
    setBenefitDescription(benefit.description)
    setBenefitImage(benefit.image)
    setNavigationImage(benefit.navigation)
  }

  const navigateForward = () => {
    let index = listOfBenefits.findIndex(
      benefit => benefit.value === benefitSelectedDesktop
    )
    if (index === 3) {
      index = 0
    } else {
      index++
    }
    const benefit = listOfBenefits[index]
    handleSelectBenefitDesktop(benefit)
  }

  const navigateBackward = () => {
    let index = listOfBenefits.findIndex(
      benefit => benefit.value === benefitSelectedDesktop
    )
    if (index === 0) {
      index = 3
    } else {
      index--
    }
    const benefit = listOfBenefits[index]
    handleSelectBenefitDesktop(benefit)
  }

  const handleSelectBenefitMobile = benefit => {
    if (benefitSelectedMobile === benefit.value) {
      setBenefitMobile("")
    } else {
      setBenefitMobile(benefit.value)
    }
  }

  const benefitSelectors = listOfBenefits.map(benefit => {
    return (
      <BenefitSelector
        key={benefit.value}
        border={
          benefitSelectedDesktop === benefit.value ? "2px solid #000000" : null
        }
        backgroundcolor={benefit.backgroundColor}
        textcolor={
          benefitSelectedDesktop === benefit.value
            ? colors.LODGEBOOK_WHITE
            : benefit.textColor
        }
        onMouseEnter={() => handleSelectBenefitDesktop(benefit)}
      >
        <BenefitTitle>{benefit.title}</BenefitTitle>
      </BenefitSelector>
    )
  })

  const benefitExpansionPanels = listOfBenefits.map(benefit => {
    return (
      <MobileExpansionPanel
        key={benefit.value}
        expanded={benefitSelectedMobile === benefit.value}
        textcolor={benefit.textColor}
      >
        <MobileExpansionPanelSummary
          onClick={() => handleSelectBenefitMobile(benefit)}
          border={
            benefitSelectedMobile === benefit.value ? "2px solid #000000" : null
          }
          backgroundcolor={benefit.backgroundColor}
          textcolor={
            benefitSelectedMobile === benefit.value
              ? colors.LODGEBOOK_WHITE
              : benefit.textColor
          }
        >
          <PanelSummaryContainer>
            <BenefitMobileTitle>{benefit.title}</BenefitMobileTitle>
            <BenefitMobileIcon
              src={
                benefitSelectedMobile === benefit.value ? MinusIcon : PlusIcon
              }
              filter={
                benefitSelectedMobile === benefit.value
                  ? "invert(100%) sepia(100%) saturate(14%) hue-rotate(212deg) brightness(104%) contrast(104%)"
                  : benefit.iconFilter
              }
            />
          </PanelSummaryContainer>
        </MobileExpansionPanelSummary>
        <MobileExpansionPanelDetails>
          <BenefitImageContainer>
            <BenefitImage src={benefit.image} />
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitImageContainer>
        </MobileExpansionPanelDetails>
      </MobileExpansionPanel>
    )
  })

  return (
    <BenefitsContainer>
      <Title>
        Lodgebook offers a modern solution that hotel managers love.
      </Title>
      <DesktopTable>
        <BenefitDetails>
          <BenefitImage src={benefitImage} />
          <BenefitDescription>{benefitDescription}</BenefitDescription>
          <NavigationContainer>
            <NavigationArrow src={arrow} onClick={() => navigateBackward()} />
            <NavigationDots src={navigationImage} />
            <NavigationArrow
              src={arrow}
              transform="scaleX(-1)"
              onClick={() => navigateForward()}
            />
          </NavigationContainer>
        </BenefitDetails>
        <BenefitSelectorContainer>{benefitSelectors}</BenefitSelectorContainer>
      </DesktopTable>
      <MobilePanelsContainer>{benefitExpansionPanels}</MobilePanelsContainer>
    </BenefitsContainer>
  )
}

export default Benefits
