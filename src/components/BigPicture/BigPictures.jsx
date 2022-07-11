import React from 'react';
import BigPicturesCancel from 'src/common/BigPicturesCancel/BigPicturesCancel';
import BigPicturesTitle from 'src/common/BigPicturesTitle/BigPicturesTitle';
import Socials from 'components/Socials/Socials';
import BigPictureImg from 'components/BigPictureImg/BigPictureImg';

const BigPictures = () => {
  return (
    <section className="big-picture  overlay  hidden">
      <BigPicturesTitle />
      <div className="big-picture__preview">
        {/* Просмотр изображения */}
        <BigPictureImg />
        {/* Информация об изображении. Подпись, комментарии, количество лайков */}
        <Socials />
        {/* Кнопка для выхода из полноэкранного просмотра изображения */}
        <BigPicturesCancel />
      </div>
    </section>
  );
};

export default BigPictures;
