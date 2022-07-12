import React, { useEffect, useState } from 'react';
import ImgUpload from 'components/ImgUpload/ImgUpload';
import Picture from 'components/Picture/Picture';
import { loadPhotos } from 'src/api/api';

const Pictures = () => {
  //photos = список фотографий (с сервера)
  // setPhotos = функция, которая обновляет стейт
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  console.log(photos);

  return (
    <section className="pictures  container">
      <h2 className="pictures__title  visually-hidden">Фотографии других пользователей</h2>
      {/* Поле для загрузки нового изображения на сайт */}
      <ImgUpload />
      {/* Здесь будут изображения других пользователей */}
      {photos.map((photo) => (
        <Picture
          src={photo.url}
          comments={photo.comments}
          likes={photo.likes}
          description={photo.description}
        />
      ))}
    </section>
  );
};

export default Pictures;
