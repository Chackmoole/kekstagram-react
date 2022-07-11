import React from 'react';

const Socials = () => {
  return (
    <div className="big-picture__social  social">
      <div className="social__header">
        <img
          className="social__picture"
          src="img/avatar-1.svg"
          alt="Аватар автора фотографии"
          width="35"
          height="35"
        />
        <p className="social__caption">Тестим новую камеру! =)</p>
        <p className="social__likes">
          Нравится <span className="likes-count">356</span>
        </p>
      </div>

      {/* Комментарии к изображению */}
      <div className="social__comment-count">
        5 из <span className="comments-count">125</span> комментариев
      </div>
      <ul className="social__comments">
        <li className="social__comment">
          <img
            className="social__picture"
            src="img/avatar-4.svg"
            alt="Аватар комментатора фотографии"
            width="35"
            height="35"
          />
          <p className="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
        </li>
        <li className="social__comment">
          <img
            className="social__picture"
            src="img/avatar-3.svg"
            alt="Аватар комментатора фотографии"
            width="35"
            height="35"
          />
          <p className="social__text">Да это фоташоп!!!!!!!!</p>
        </li>
      </ul>

      {/* Кнопка для загрузки новой порции комментариев */}
      <button type="button" className="social__comments-loader  comments-loader">
        Загрузить еще
      </button>

      {/* Форма для отправки комментария */}
      <div className="social__footer">
        <img
          className="social__picture"
          src="img/avatar-6.svg"
          alt="Аватар комментатора фотографии"
          width="35"
          height="35"
        />
        <input type="text" className="social__footer-text" placeholder="Ваш комментарий..." />
        <button type="button" className="social__footer-btn" name="button">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Socials;
