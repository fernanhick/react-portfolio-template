import React from 'react';
import {SectionsHeader} from '../SectionsHeaderStyle';
import {
  ContanctContainer,
  CWrapr,
  SubmitButton,
  SubmitDetails,
  SubmitDetDesc,
  SubmitDetHeader,
  SubmitForm,
  SubmitLabel,
  SunHead,
} from './ContactSectionElements';

function ContactSection() {
  return (
    <>
      <SectionsHeader>Contact</SectionsHeader>
      <ContanctContainer id='contact'>
        <CWrapr>
          <SunHead>Contact Me!</SunHead>
          <SubmitForm>
            <SubmitLabel placeholder='Name' />
            <SubmitLabel placeholder='Email' />
            <SubmitDetails>
              <SubmitDetHeader></SubmitDetHeader>
              <SubmitDetDesc>
                Please include your at least your email for me to be able to
                contact you back.{' '}
              </SubmitDetDesc>
            </SubmitDetails>
            <SubmitButton>Submit</SubmitButton>
          </SubmitForm>
        </CWrapr>
      </ContanctContainer>
    </>
  );
}

export default ContactSection;
