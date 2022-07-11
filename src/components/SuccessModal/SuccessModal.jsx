import React from 'react';

const SuccessModal = () => {
  return (
    <section className="success hidden">
      <div className="success__inner">
        <h2 className="success__title">Изображение успешно загружено</h2>
        <button type="button" className="success__button">
          Круто!
        </button>
      </div>
    </section>
  );
};

export default SuccessModal;
