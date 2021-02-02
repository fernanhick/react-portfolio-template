import React from 'react';
import {
  ContanctContainer,
  CWrapr,
  SubmitForm,
  SubmitNameLabel,
  SubmitEmailLabel,
  SubmitButton,
  SubmitDetails,
  SubmitDetHeader,
  SubmitDetDesc,
} from './ContactSectionElements';

function ContactSection() {
  return (
    <>
      <ContanctContainer>
        <CWrapr>
          <SubmitForm>
            <SubmitNameLabel placeholder='Name' />
            <SubmitEmailLabel placeholder='Email' />
            <SubmitButton>Submit</SubmitButton>
          </SubmitForm>
          <SubmitDetails>
            <SubmitDetHeader>Submit your details for contact</SubmitDetHeader>
            <SubmitDetDesc>
              Only required its your email for contact.
            </SubmitDetDesc>
          </SubmitDetails>
        </CWrapr>
      </ContanctContainer>
    </>
  );
}

export default ContactSection;
