import React from 'react';

const Contacts = () => {
  return (
    <ul className="page-footer__contacts  contacts">
      <li>
        <a
          href="https://twitter.com/htmlacademy_ru"
          className="contacts__link  contacts__link--twitter"
        >
          Twitter
        </a>
      </li>
      <li>
        <a href="https://vk.com/htmlacademy" className="contacts__link  contacts__link--vk">
          VK
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
