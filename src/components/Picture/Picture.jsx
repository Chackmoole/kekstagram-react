import React from 'react';

const Picture = () => {
  return (
    <a href="#" className="picture hidden">
      <img className="picture__img" src="" width="182" height="182" alt="Случайная фотография" />
      <p className="picture__info">
        <span className="picture__comments" />
        <span className="picture__likes" />
      </p>
    </a>
  );
};

export default Picture;
