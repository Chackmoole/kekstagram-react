import React from 'react';

const ErrorModal = () => {
  return (
    <section className="error hidden">
      <div className="error__inner">
        <h2 className="error__title">Ошибка загрузки файла</h2>
        <button type="button" className="error__button">
          Загрузить другой файл
        </button>
      </div>
    </section>
  );
};

export default ErrorModal;
