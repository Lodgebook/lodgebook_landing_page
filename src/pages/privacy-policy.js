import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicyContainer = styled.div`
  margin-top: 4.5rem;
  margin-left: 11rem;
  margin-right: 9rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin: 4rem 1rem;
  }
`

const PrivacyPolicyTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 2.25rem;
  font-weight: normal;
  line-height: 100%;
  margin-top: 3.5rem;
  text-transform: uppercase:
  @media only screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`

const PrivacyPolicyHeader = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 1.75rem;
  font-weight: normal;
  line-height: 100%;
  margin-top: 1rem;
  text-transform: uppercase:
  @media only screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`
const PrivacyPolicySubHeader = styled.h3`
  font-family: 'Arial', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 100%;
  margin-top: 1rem;
  @media only screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`

const PrivacyPolicyText = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 150%;
  margin-top: 1rem;
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`


const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <PrivacyPolicyContainer>
      <PrivacyPolicyTitle>Privacy Policy</PrivacyPolicyTitle>
      <PrivacyPolicyText>Thank you for choosing to be part of our community at LODGEBOOK LLC (<b>“Company”</b>, <b>“we”</b>, <b>“us”</b>, or <b>“our”</b>). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@mylodgebook.com.</PrivacyPolicyText>
      <PrivacyPolicyText>When you visit our website <a href="https://www.mylodgebook.com/" target="_blank">https://www.mylodgebook.com/</a>, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</PrivacyPolicyText>
      <PrivacyPolicyText>This privacy policy applies to all information collected through our website (such as <a href="https://www.mylodgebook.com/" target="_blank">https://www.mylodgebook.com/</a>), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the <b>"Services"</b>).</PrivacyPolicyText>
      <PrivacyPolicyHeader>Table of Contents</PrivacyPolicyHeader>
      <PrivacyPolicyText><b>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</b></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#infouse">2. HOW DO WE USE YOUR INFORMATION?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#caresidents">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#policyupdates">10. DO WE MAKE UPDATES TO THIS POLICY?</a></PrivacyPolicyText>
      <PrivacyPolicyText><a href="#contact">11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a></PrivacyPolicyHeader>
      <PrivacyPolicySubHeader>Personal information you disclose to us</PrivacyPolicySubHeader>
      <PrivacyPolicyText><i><b>In Short:</b>  We collect personal information that you provide to us.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</PrivacyPolicyText>
      <PrivacyPolicyText>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:</PrivacyPolicyText>
      <PrivacyPolicyText><b>Publicly Available Personal Information.</b> We collect first name, maiden name, last name, and nickname; email addresses; phone numbers; business email; business phone number; and other similar data. </PrivacyPolicyText>
      <PrivacyPolicyText>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#infouse">2. HOW DO WE USE YOUR INFORMATION?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</PrivacyPolicyText>
      <PrivacyPolicyText>We use the information we collect or receive:</PrivacyPolicyText>
      <ul>
        <li>
          <PrivacyPolicyText><b>To facilitate account creation and logon process.</b> If you choose to link your account with us to a third party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>To send you marketing and promotional communications</b> We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the <a href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS"</a> below).</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyHeader><a id="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#caresidents">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#policyupdates">10. DO WE MAKE UPDATES TO THIS POLICY?</a></PrivacyPolicyHeader>
      <PrivacyPolicyHeader><a id="#contact">11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></PrivacyPolicyHeader>
    </PrivacyPolicyContainer>
  </Layout>
)

export default PrivacyPolicy
