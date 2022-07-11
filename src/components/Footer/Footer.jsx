import React from 'react';
import Copyright from 'components/Copyright/Copyright';
import Contacts from 'components/Contacts/Contacts';

const Footer = () => {
  return (
    <footer className="page-footer  container">
      <div className="page-footer__wrapper">
        <Copyright />
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
