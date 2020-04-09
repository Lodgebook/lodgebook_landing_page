import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import colors from "../colors"
import scrollTo from 'gatsby-plugin-smoothscroll'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgba(87, 143, 175, 0.1);
  height: 15rem;
  margin-top: 3rem;
`

const LogoContainer = styled.footer`
  display: flex;
  align-items: center;
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`

const Logo = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  margin-right: 0.7rem;
`

const FooterText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  line-height: 140%;
`

const FooterLink = styled.a`
  font-style: normal;
  line-height: 140%;
  text-decoration: none;
  color: ${colors.LODGEBOOK_BLACK};
  cursor: pointer;
  margin-right: 2rem;
`

const Footer = () => (
  <FooterContainer>
    <Section>
      <LogoContainer>
        <Logo src={logo} />
        <FooterText>
          Lodgebook <br />
          Let's work smarter.
        </FooterText>
      </LogoContainer>
      <FooterText>
        tony@mylodgebook.com <br />
        (562) 455-8688
      </FooterText>
    </Section>
    <Section>
      <FooterText>
        <FooterLink onClick= {() => scrollTo('#users')}>Users </FooterLink>
        <FooterLink onClick= {() => scrollTo('#features')}>Features </FooterLink>
        <FooterLink onClick= {() => scrollTo('#contact')}>Contact </FooterLink>
      </FooterText>
      <FooterText>© {new Date().getFullYear()} All rights reserved.</FooterText>
    </Section>
  </FooterContainer>
)

export default Footer
