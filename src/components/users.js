import React, { useState } from "react"
import styled from "styled-components"
import ManagerImage from "../images/manager.png"
import MaintenanceImage from "../images/maintenance.png"
import FrontDeskImage from "../images/front-desk.png"
import HousekeeperImage from "../images/housekeeper.png"
import UsersBackground from "../images/users-blue-background.jpg"
import NavigationDots1 from "../images/navigation-dots-1.svg"
import NavigationDots2 from "../images/navigation-dots-2.svg"
import NavigationDots3 from "../images/navigation-dots-3.svg"
import NavigationDots4 from "../images/navigation-dots-4.svg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import colors from "../colors"

const usersData = [
  {
    icon: ManagerImage,
    positionBottom: "0rem",
    positionRight: "74%",
    positionRightSmallerScreen: "70%",
    backgroundColor: colors.LODGEBOOK_BLUE_DARK,
    navigation: NavigationDots1,
    width: "13rem",
    title: "Manager",
    description:
      " Take control of room statuses, room inspections, guest issues, and maintenance tasks on any mobile device.",
    value: "manager",
  },
  {
    icon: FrontDeskImage,
    positionBottom: "-0.3rem",
    positionRight: "55%",
    positionRightSmallerScreen: "53%",
    backgroundColor: colors.LODGEBOOK_PINK_DARK,
    navigation: NavigationDots2,
    width: "10.5rem",
    title: "Front Desk",
    description:
      "Escalate guest issues to other staff members with multi-language support and text SMS.",
    value: "frontDesk",
  },
  {
    icon: MaintenanceImage,
    positionBottom: "-2rem",
    positionRight: "35%",
    backgroundColor: colors.LODGEBOOK_YELLOW_DARK,
    navigation: NavigationDots3,
    width: "11rem",
    title: "Maintenance",
    description:
      "Prioritize tasks and improve room quality with an easy-to-use preventative maintenance interface.",
    value: "maintenance",
  },
  {
    icon: HousekeeperImage,
    positionBottom: "-5rem",
    positionRight: "15%",
    backgroundColor: colors.LODGEBOOK_ACCENT_DARK,
    navigation: NavigationDots4,
    width: "10.5rem",
    title: "Housekeeper",
    description:
      "Update room statuses in real-time and give the team assurance that rooms are ready.",
    value: "housekeeper",
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0rem 1.5rem 0rem;
`

const UserImage = styled.img`
  position: absolute;
  cursor: pointer;
  width: ${props => props.width};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  opacity: ${props => props.opacity};
  @media only screen and (max-width: 1440px) {
    right: ${props => props.rightSmallerScreen};
  }
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: normal;
  line-height: 110%;
  text-align: center;
`

const UserImagesDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: url(${UsersBackground});
  background-size: cover;
  height: 17.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const UserDetailsDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0rem 10rem;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const UserDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 12.5rem;
  cursor: pointer;
  padding: 1.5rem 1.5rem 1.5rem 1rem;
  opacity: ${props => props.opacity};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`

const UserTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`

const UserDescription = styled.p`
  font-size: 1rem;
`

const NavigationDotsContainer = styled.div`
  justify-content: center;
  display: none;
@media only screen and (max-width: 480px) {
  display: flex;
}
`

const NavigationDots = styled.img`
width: 7.5rem;
margin: 2rem 1rem 1rem 1rem;
`

const CarouselMobile = styled(Carousel)`
display: none;
@media only screen and (max-width: 480px) {
  display: block;
}
`

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
`

const CarouselImage = styled.img`
  position: absolute;
  padding: 25rem;
  right: 1rem;
  top: -19rem;
  @media only screen and (max-width: 540px) {
    top: -13rem;
    padding: 15rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 10rem;
    right: 1rem;
    top: -6rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 7rem;
    right: 1rem;
    top: -3rem;
  }
`

const CarouselImageContainer = styled.div`
  position: relative;
  height: 35rem;
  width: 100%;
  overflow: hidden;
  background-image: url(${UsersBackground});
  @media only screen and (max-width: 480px) {
    height: 25rem;
  }
  @media only screen and (max-width: 320px) {
    height: 25rem;
  }
`

const CarouselTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 18rem;
  background-color: ${props => props.backgroundColor};
  align-items: center;
  width: 60%;
`

const CarouselDetails = styled.p`
  color: white;
  text-align: left;
  font-size: 2rem;
  line-height: 1.2;
  width: 80%;
  @media only screen and (max-width: 540px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`

const CarouselTitle = styled.p`
  color: white;
  font-size: 2.5rem;
  text-align: left;
  width: 80%;
  margin-bottom: 1.5rem;
  font-weight: bold;
  @media only screen and (max-width: 540px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.9rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`

const Users = () => {
  const [userSelected, setUser] = useState(usersData[0].value)
  const [navigationImage, setNavigationImage] = useState(NavigationDots1)

  const handleSetUser = user => {
    setUser(user.value)
  }

  const handleSetNavigationImage = index => {
    const navigationImage = usersData[index].navigation
    setNavigationImage(navigationImage)
  }

  const userImages = usersData.map(user => {
    return (
      <UserImage
        onMouseEnter={() => handleSetUser(user)}
        width={user.width}
        right={user.positionRight}
        rightSmallerScreen={user.positionRightSmallerScreen}
        bottom={user.positionBottom}
        opacity={user.value === userSelected ? 1 : 0.3}
        src={user.icon}
      />
    )
  })

  const userDetails = usersData.map(user => {
    return (
      <UserDetails
        onMouseEnter={() => handleSetUser(user)}
        opacity={user.value === userSelected ? 1 : 0.3}
        backgroundColor={
          user.value === userSelected ? user.backgroundColor : null
        }
        color={user.value === userSelected ? colors.LODGEBOOK_WHITE : null}
      >
        <UserTitle>{user.title}</UserTitle>
        <UserDescription>{user.description}</UserDescription>
      </UserDetails>
    )
  })

  const carouselItems = usersData.map(user => {
    return (
      <CarouselSlide>
        <CarouselImageContainer>
          <CarouselImage src={user.icon} />
        </CarouselImageContainer>
        <CarouselTextContainer backgroundColor={user.backgroundColor}>
    <CarouselTitle >{user.title}</CarouselTitle>
          <CarouselDetails >
            {user.description}
          </CarouselDetails>
        </CarouselTextContainer>
      </CarouselSlide>
    )
  })

  return (
    <Container id = "users">
      <TitleContainer>
        <Title>Users of Lodgebook</Title>
      </TitleContainer>
      <UserImagesDesktop>{userImages}</UserImagesDesktop>
      <UserDetailsDesktop>{userDetails} </UserDetailsDesktop>
      <NavigationDotsContainer>
        <NavigationDots src= {navigationImage}/>
      </NavigationDotsContainer>
      <CarouselMobile showIndicators={false} showStatus={false} onChange = {(index) => handleSetNavigationImage(index)}>
        {carouselItems}
      </CarouselMobile>
    </Container>
  )
}

export default Users
