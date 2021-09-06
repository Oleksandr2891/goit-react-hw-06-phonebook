// import { useState, useEffect } from 'react';
import ContactList from './Componenets/ContactList/ContactList';
import FIlter from './Componenets/Filter/FIlter';
import Form from './Componenets/Form/Form';
import Section from './Componenets/Section/Section';

import GlobalStyles from "../src/style/GlobalStyle";

export default function App() {

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   parsedContacts?.length ? setContacts(parsedContacts) : setContacts(contactsBase);
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  return (
    <>
      <GlobalStyles />
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <div className="contactsWrapper">
          <FIlter />
          <ContactList />
        </div>
      </Section>
    </>
  );
}

