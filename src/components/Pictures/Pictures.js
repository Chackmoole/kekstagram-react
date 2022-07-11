import React from 'react';
import ImgUpload from 'components/ImgUpload/ImgUpload';

const Pictures = () => {
  return (
    <section className="pictures  container">
      <h2 className="pictures__title  visually-hidden">Фотографии других пользователей</h2>
      {/* Поле для загрузки нового изображения на сайт */}
      <ImgUpload />
      {/* Здесь будут изображения других пользователей */}
    </section>
  );
};

export default Pictures;
