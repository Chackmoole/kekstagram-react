import React from 'react';

const ErrorModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <section className="error">
      <div className="error__inner">
        <h2 className="error__title">Ошибка загрузки файла</h2>
        <button type="button" className="error__button" onClick={onClose}>
          Загрузить другой файл
        </button>
      </div>
    </section>
  );
};

export default ErrorModal;
