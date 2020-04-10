import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import scrollTo from "gatsby-plugin-smoothscroll"
import colors from "../colors"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 9.4rem;
  background: white;
  @media only screen and (max-width: 480px) {
    padding: 1.4rem 3.5rem;
  }
`

const NavigationContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  font-size: 0.9rem;
`

const NavigationItem = styled.p`
  color: black;
  margin: 0rem 1.4rem;
  font-weight: 500;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    display: ${props => {
      return props.hideOnMobile ? "none" : "block"
    }};
    font-size: 1.4rem;
    color: lightseagreen;
    font-family: "GraphikBold";
  }
`

const Login = styled.a`
  border: 2px solid ${colors.LODGEBOOK_PRIMARY};
  color: lightseagreen;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0rem 1.1rem;
  width: 6.2rem;
  height: 2.6rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
  @media only screen and (max-width: 600px) {
    border: 1px solid ${colors.LODGEBOOK_PRIMARY};
  }
  @media only screen and (max-width: 480px) {
    border: 1px solid ${colors.LODGEBOOK_PRIMARY};
    height: 3rem;
    font-size: 1.4rem;
    width: 10rem;
  }
`

const Logo = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  @media only screen and (max-width: 480px) {
    height: 3rem;
    width: 3rem;
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const LogoText = styled.h1`
  font-size: 1.1rem;
  margin-left: 0.8rem;
  font-weight: bold;
  color: ${colors.LODGEBOOK_PRIMARY};
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logo} />
      <LogoText>Lodgebook</LogoText>
    </LogoContainer>
    <NavigationContainer>
      <NavigationItem onClick={() => scrollTo("#users")} hideOnMobile={true}>
        Users
      </NavigationItem>
      <NavigationItem onClick={() => scrollTo("#features")} hideOnMobile={true}>
        Features
      </NavigationItem>
      <NavigationItem onClick={() => scrollTo("#contact")} hideOnMobile={false}>
        Contact
      </NavigationItem>
      <Login className="login" href="https://app.mylodgebook.com/">
        Login{" "}
      </Login>
    </NavigationContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
