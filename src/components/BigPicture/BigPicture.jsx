import React from 'react';
import Socials from 'components/Socials/Socials';

const BigPicture = ({ src, closeBigPhoto, comments, likes, description }) => {
  return (
    <section className="big-picture overlay">
      <h2 className="big-picture__title  visually-hidden">Просмотр фотографии</h2>;
      <div className="big-picture__preview">
        {/* Просмотр изображения */}
        <div className="big-picture__img">
          <img src={src} alt="Девушка в купальнике" width="600" height="600" />
        </div>
        {/* Информация об изображении. Подпись, комментарии, количество лайков */}
        <Socials comments={comments} likes={likes} description={description} />
        {/* Кнопка для выхода из полноэкранного просмотра изображения */}
        <button
          type="reset"
          className="big-picture__cancel  cancel"
          id="picture-cancel"
          onClick={() => {
            closeBigPhoto();
          }}
        >
          Закрыть
        </button>
      </div>
    </section>
  );
};

export default BigPicture;
