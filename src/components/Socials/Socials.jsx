import React, { useState } from 'react';

const COMMENTS_STEP = 5;

const Socials = ({ comments, likes, description }) => {
  const initialCommentsCount = comments.length < COMMENTS_STEP ? comments.length : COMMENTS_STEP;

  const [commentsCount, setCommentsCount] = useState(initialCommentsCount);

  const onLoadMoreButtonClick = () => {
    const newCount = commentsCount + COMMENTS_STEP;
    const resultCount = newCount > comments.length ? comments.length : newCount;
    setCommentsCount(resultCount);
  };

  const isLoadMoreButtonVisible = comments.length > commentsCount;

  return (
    <div className="big-picture__social social">
      <div className="social__header">
        <img
          className="social__picture"
          src="img/avatar-1.svg"
          alt="Аватар автора фотографии"
          width="35"
          height="35"
        />
        <p className="social__caption">{description}</p>
        <p className="social__likes">
          Нравится <span className="likes-count">{likes}</span>
        </p>
      </div>

      {/* Комментарии к изображению */}
      <div className="social__comment-count">
        {commentsCount} из <span className="comments-count">{comments.length}</span> комментариев
      </div>

      <ul className="social__comments">
        {comments.slice(0, commentsCount).map((comment) => (
          <li className="social__comment">
            <img
              className="social__picture"
              src={comment.avatar}
              alt="Аватар комментатора фотографии"
              width="35"
              height="35"
            />
            <p className="social__text">{comment.message}</p>
          </li>
        ))}
      </ul>

      {/* Кнопка для загрузки новой порции комментариев */}
      {isLoadMoreButtonVisible ? (
        <button
          type="button"
          className="social__comments-loader  comments-loader"
          onClick={() => {
            onLoadMoreButtonClick();
          }}
        >
          Загрузить еще
        </button>
      ) : null}

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
