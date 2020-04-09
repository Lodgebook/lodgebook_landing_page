import React from "react"
import styled from "styled-components"
import colors from "../colors"

const FormContainer = styled.div`
  width: 100%;
  margin-top: -8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SignUpForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin-top: -5.5rem;
  background-color: white;
  border-radius: 5px;
  padding: 2rem 4.5rem;
  @media only screen and (max-width: 480px) {
    width: 90%;
    padding: 3rem;
  }
`

const AgreementContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2rem 0rem -1rem 0rem;
`

const AgreementDescription = styled.p`
  margin-left: 1rem;
  font-style: normal;
  line-height: 140%;
  font-weight: normal;
  font-size: 1rem;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const AgreementCheckbox = styled.input`
  margin-top: 0.3rem;
`

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.width};
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const FormLabel = styled.label`
  margin: 1rem 0rem 0.5rem 0rem;
`

const FormInput = styled.input`
  width: ${props => props.width};
  height: 2.7rem;
  font-size: 1rem;
  padding: 1rem;
  background: ${colors.FORM_INPUT_GREY};
  border-radius: 2px;
  border: none;
  color: ${colors.LODGEBOOK_BLACK};
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

const FormTextArea = styled.textarea`
  height: 8.9rem;
  width: 90%;
  background: ${colors.FORM_INPUT_GREY};
  border-radius: 2px;
  border: none;
  color: ${colors.LODGEBOOK_BLACK};
  font-size: 1rem;
  padding: 1rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const HeadlineContainer = styled.div`
  width: 85%;
  height: 16.9rem;
  padding: 3.5rem 5rem;
  marginbottom: 1.45rem;
  background: linear-gradient(
    354.59deg,
    ${colors.LODGEBOOK_ACCENT} -3.94%,
    ${colors.LODGEBOOK_ACCENT_DARK} 34.05%,
    ${colors.LODGEBOOK_BLUE_DARK} 83.79%
  );
  color: white;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    height: 20rem;
    width: 100%;
    padding: 3.5rem 0rem;
  }
`

const MainHeadline = styled.h1`
  font-size: 2.25rem;
  line-height: 110%;
  font-style: normal;
  font-weight: normal;
  width: 50%;
  @media only screen and (max-width: 480px) {
    font-size: 3rem;
    width: 80%;
    text-align: center;
  }
`

const SupportingHeadline = styled.p`
  font-size: 1rem;
  width: 40%;
  line-height: 140%;
  font-style: normal;
  font-weight: normal;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const CTAButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${colors.LODGEBOOK_PRIMARY_LIGHT};
  padding: 0.5rem 1.2rem;
  margin-top: 3rem;
  outline: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 15px rgba(50, 178, 174, 0.5);
  }
`

const Form = () => (
  <FormContainer id = "contact">
    <HeadlineContainer>
      <MainHeadline>Ready to work smarter?</MainHeadline>
      <SupportingHeadline>
        Complete this form and we'll answer any questions that you may have.
      </SupportingHeadline>
    </HeadlineContainer>
    <SignUpForm>
      <FormInputContainer width="50%">
        <FormLabel>First Name*</FormLabel>
        <FormInput type="text" placeholder="First name" width="80%" />
      </FormInputContainer>
      <FormInputContainer width="50%">
        <FormLabel>Last Name*</FormLabel>
        <FormInput type="text" placeholder="Last name" width="80%" />
      </FormInputContainer>
      <FormInputContainer width="100%">
        <FormLabel>Company</FormLabel>
        <FormInput type="text" placeholder="Company" width="40%" />
      </FormInputContainer>
      <FormInputContainer width="100%">
        <FormLabel>Message</FormLabel>
        <FormTextArea type="text" placeholder="Message" width="80%" />
      </FormInputContainer>
      <AgreementContainer>
        <AgreementCheckbox type="checkbox" />
        <AgreementDescription>
          I agree to receive marketing communications regarding Lodgebook
          products, services and events. I can unsubscribe at any time.
        </AgreementDescription>
      </AgreementContainer>
      <AgreementContainer>
        <AgreementCheckbox type="checkbox" />
        <AgreementDescription>
          I consent to Lodgebook's Privacy Notice and Terms of Use.
        </AgreementDescription>
      </AgreementContainer>
      <CTAButton>Submit</CTAButton>
    </SignUpForm>
  </FormContainer>
)

export default Form
