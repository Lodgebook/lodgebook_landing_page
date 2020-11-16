import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/logo.png"
import colors from "../colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgba(87, 143, 175, 0.1);
  height: 15rem;
  margin-top: 3rem;
  @media only screen and (max-width: 480px) {
    height: 100%;
    background: #FBFBFB;
  }
`

const LogoContainer = styled.footer`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin 2.5rem 0rem;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Logo = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  margin-right: 0.7rem;
  @media only screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`

const FooterText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  line-height: 140%;
  @media only screen and (max-width: 480px) {
    display: ${props => props.display};
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;
    margin-top: ${props => props.margintop};
  }
`

const FooterLink = styled.a`
  font-style: normal;
  line-height: 140%;
  text-decoration: none;
  color: ${colors.LODGEBOOK_BLACK};
  cursor: pointer;
  margin-right: 2rem;
  @media only screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`

const Footer = () => (
  <FooterContainer>
    <Section>
      <LogoContainer>
        <Logo src={logo} />
        <FooterText display = 'flex'>
          Lodgebook <br />
          Let's work smarter.
        </FooterText>
      </LogoContainer>
      <FooterText display = 'none'>
        support@mylodgebook.com <br />
        (562) 455-8688
      </FooterText>
    </Section>
    <Section>
      <FooterText display = 'flex'>
        <FooterLink onClick={() => scrollTo("#users")}>Users </FooterLink>
        <FooterLink onClick={() => scrollTo("#features")}>Features </FooterLink>
        <FooterLink onClick={() => scrollTo("#contact")}>Contact </FooterLink>
        <Link style={{ textDecoration: 'none' }} to="/privacy-policy" partiallyActive={true}><FooterLink>Privacy Policy </FooterLink></Link>
      </FooterText>
      <FooterText margintop = '5rem' display = 'flex' style = {{fontWeight: 'normal'}}>© {new Date().getFullYear()} All rights reserved.</FooterText>
    </Section>
  </FooterContainer>
)

export default Footer
