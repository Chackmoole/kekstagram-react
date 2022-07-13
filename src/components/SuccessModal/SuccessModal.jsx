import React from 'react';

const SuccessModal = ({ closeSuccessModal }) => {
  return (
    <section className="success">
      <div className="success__inner">
        <h2 className="success__title">Изображение успешно загружено</h2>
        <button
          type="button"
          className="success__button"
          onClick={() => {
            closeSuccessModal();
          }}
        >
          Круто!
        </button>
      </div>
    </section>
  );
};

export default SuccessModal;
