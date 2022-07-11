import React from 'react';

const Copyright = () => {
  return (
    <div className="page-footer__copyright  copyright">
      <a
        className="copyright__link  copyright__link--image"
        href="https://htmlacademy.ru/intensive/javascript"
      >
        <img src="img/htmla-logo.svg" width="130" height="45" alt="HTML Academy" />
      </a>
      <p>
        Сделано в{' '}
        <a
          className="copyright__link  copyright__link--text"
          href="https://htmlacademy.ru/intensive/javascript"
        >
          HTML Academy
        </a>
      </p>
    </div>
  );
};

export default Copyright;
