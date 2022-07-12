import React from 'react';

const BigPictureImg = ({ src }) => {
  return (
    <div className="big-picture__img">
      <img src={src} alt="Девушка в купальнике" width="600" height="600" />
    </div>
  );
};

export default BigPictureImg;
