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

const PrivacyPolicyText = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 150%;
  margin-top: 1rem;
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

const AddressText = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 100%;
  margin-top: .5rem;
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
        <li>
          <PrivacyPolicyText><b>To enable user-to-user communications.</b> We may use your information in order to enable user-to-user communications with each user's consent.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>To respond to user inquiries/offer support to users.</b> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>For other Business Purposes.</b> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyHeader><a id="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We may process or share data based on the following legal basis:</PrivacyPolicyText>
      <ul>
        <li>
          <PrivacyPolicyText><b>Consent:</b> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Legitimate Interests:</b> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Performance of a Contract:</b> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Legal Obligations:</b> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Vital Interests:</b> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyText>More specifically, we may need to process your data or share your personal information in the following situations:</PrivacyPolicyText>
      <ul>
        <li>
          <PrivacyPolicyText><b>Vendors, Consultants and Other Third-Party Service Providers.</b> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</PrivacyPolicyText>
        </li>
        <li>
          <PrivacyPolicyText><b>Third-Party Advertisers.</b> We may use third-party advertising companies to serve ads when you visit the Services. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyHeader><a id="#inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than 6 months past the termination of the user's account.</PrivacyPolicyText>
      <PrivacyPolicyText>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at support@mylodgebook.com.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> You may review, change, or terminate your account at any time.</i></PrivacyPolicyText>
      <PrivacyPolicyText>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"> http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a></PrivacyPolicyText>
      <PrivacyPolicyText>If you have questions or comments about your privacy rights, you may email us at support@mylodgebook.com.</PrivacyPolicyText>
      <PrivacyPolicySubHeader>Account Information</PrivacyPolicySubHeader>
      <PrivacyPolicyText>If you would at any time like to review or change the information in your account or terminate your account, you can:</PrivacyPolicyText>
      <ul>
        <li>
          <PrivacyPolicyText>Contact us using the contact information provided.</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyText>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</PrivacyPolicyText>
      <PrivacyPolicyText><b><u>Opting out of email marketing:</u></b> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:</PrivacyPolicyText>
      <ul>
        <li>
          <PrivacyPolicyText>Contact us using the contact information provided.</PrivacyPolicyText>
        </li>
      </ul>
      <PrivacyPolicyHeader><a id="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a></PrivacyPolicyHeader>
      <PrivacyPolicyText>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#caresidents">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</i></PrivacyPolicyText>
      <PrivacyPolicyText>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</PrivacyPolicyText>
      <PrivacyPolicyText>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#policyupdates">10. DO WE MAKE UPDATES TO THIS POLICY?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText><i><b>In Short:</b> Yes, we will update this policy as necessary to stay compliant with relevant laws.</i></PrivacyPolicyText>
      <PrivacyPolicyText>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</PrivacyPolicyText>
      <PrivacyPolicyHeader><a id="#contact">11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></PrivacyPolicyHeader>
      <PrivacyPolicyText>If you have questions or comments about this policy, you may email us at support@mylodgebook.com or by post to:</PrivacyPolicyText>
      <AddressText>LODGEBOOK LLC</AddressText>
      <AddressText>800 S BEACH BLVD</AddressText>
      <AddressText>ANAHEIM, CA 92804</AddressText>
      <AddressText>United States</AddressText>
      <PrivacyPolicyHeader>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</PrivacyPolicyHeader>
      <PrivacyPolicyText>Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://app.termly.io/notify/2e44d7a4-2f72-493e-86a6-9e6de00e5516" rel="noopener noreferrer" target="_blank">here</a>. We will respond to your request within 30 days.</PrivacyPolicyText>
      <PrivacyPolicyText>This privacy policy was created using <a href="https://termly.io/products/privacy-policy-generator/?ftseo">Termly’s Privacy Policy Generator</a>.</PrivacyPolicyText>
    </PrivacyPolicyContainer>
  </Layout>
)

export default PrivacyPolicy
