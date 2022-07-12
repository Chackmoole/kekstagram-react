import React, { useState } from 'react';
import BigPicture from 'components/BigPicture/BigPicture';

const Picture = ({ src, comments, likes, description }) => {
  const [isBigPhotoOpen, setBigPhotoOpen] = useState(false);

  const openBigPhoto = () => {
    setBigPhotoOpen(true);
  };

  const closeBigPhoto = () => {
    setBigPhotoOpen(false);
  };

  return (
    <>
      <a href="#" className="picture" onClick={() => openBigPhoto()}>
        <img
          className="picture__img"
          src={src}
          width="182"
          height="182"
          alt="Случайная фотография"
        />
        <p className="picture__info">
          <span className="picture__comments">{comments.length}</span>
          <span className="picture__likes">{likes}</span>
        </p>
      </a>
      {isBigPhotoOpen ? (
        <BigPicture
          src={src}
          closeBigPhoto={closeBigPhoto}
          comments={comments}
          likes={likes}
          description={description}
        />
      ) : null}
    </>
  );
};

export default Picture;
