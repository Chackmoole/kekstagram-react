import React, { useState } from 'react';
import EffectsList from 'components/EffectsList/EffectsList';
import SuccessModal from 'components/SuccessModal/SuccessModal';
import { sendData } from 'src/api/api';
import ErrorModal from 'components/ErrorModal/ErrorModal';

const DEFAULT_SCALING_VALUE = 100;
const DEFAULT_SCALING_STEP = 25;

const ImgUpload = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // console.log('isModalOpen', isModalOpen);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();

    const formData = new FormData(e.target);

    closeModal();
    sendData(formData)
      .then((response) => {
        if (response.ok) {
          openSuccessModal();
        } else {
          openErrorModalOpen();
        }
      })
      .catch(openErrorModalOpen);
  };

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  const openErrorModalOpen = () => {
    setErrorModalOpen(true);
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  const [scalingValue, setScalingValue] = useState(DEFAULT_SCALING_VALUE);

  const scalingIncrement = () => {
    if (scalingValue < DEFAULT_SCALING_VALUE) {
      setScalingValue(scalingValue + DEFAULT_SCALING_STEP);
    }
  };
  const scalingDecrement = () => {
    if (scalingValue > DEFAULT_SCALING_STEP) {
      setScalingValue(scalingValue - DEFAULT_SCALING_STEP);
    }
  };

  return (
    <section className="img-upload">
      <div className="img-upload__wrapper">
        <h2 className="img-upload__title  visually-hidden">Загрузка фотографии</h2>
        <form
          className="img-upload__form"
          id="upload-select-image"
          method="post"
          encType="multipart/form-data"
          autoComplete="off"
          action="https://26.javascript.pages.academy/kekstagram "
          onSubmit={handleSubmit}
        >
          {/* Изначальное состояние поля для загрузки изображения */}
          <fieldset className="img-upload__start">
            <input
              type="file"
              id="upload-file"
              className="img-upload__input  visually-hidden"
              accept="image/png, image/jpeg"
              name="filename"
              required
              onChange={() => {
                openModal();
              }}
            />
            <label htmlFor="upload-file" className="img-upload__label  img-upload__control">
              Загрузить
            </label>
          </fieldset>

          {/* Форма редактирования изображения */}
          {isModalOpen ? (
            <div className="img-upload__overlay">
              <div className="img-upload__wrapper">
                <div className="img-upload__preview-container">
                  {/* Изменение размера изображения */}
                  <fieldset className="img-upload__scale  scale">
                    <button
                      type="button"
                      className="scale__control  scale__control--smaller"
                      onClick={scalingDecrement}
                    >
                      Уменьшить
                    </button>
                    <input
                      type="text"
                      className="scale__control  scale__control--value"
                      value={`${scalingValue}%`}
                      title="Image Scale"
                      name="scale"
                    />
                    <button
                      type="button"
                      className="scale__control  scale__control--bigger"
                      onClick={scalingIncrement}
                    >
                      Увеличить
                    </button>
                  </fieldset>

                  {/* Предварительный просмотр изображения */}
                  <div className="img-upload__preview">
                    <img
                      src="img/upload-default-image.jpg"
                      alt="Предварительный просмотр фотографии"
                    />
                  </div>

                  {/* Изменение глубины эффекта, накладываемого на изображение */}
                  <fieldset className="img-upload__effect-level  effect-level">
                    <input
                      className="effect-level__value"
                      type="number"
                      step="any"
                      name="effect-level"
                      value=""
                    />
                    <div className="effect-level__slider"></div>
                  </fieldset>

                  {/* Кнопка для закрытия формы редактирования изображения */}
                  <button
                    type="reset"
                    className="img-upload__cancel  cancel"
                    id="upload-cancel"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Закрыть
                  </button>
                </div>

                {/* Наложение эффекта на изображение */}
                <EffectsList />

                {/* Добавление хэш-тегов и комментария к изображению */}
                <fieldset className="img-upload__text text">
                  <div className="img-upload__field-wrapper">
                    <input className="text__hashtags" name="hashtags" placeholder="#ХэшТег" />
                  </div>
                  <div className="img-upload__field-wrapper">
                    <textarea
                      className="text__description"
                      name="description"
                      placeholder="Ваш комментарий..."
                      maxLength="140"
                    />
                  </div>
                </fieldset>

                {/* Кнопка для отправки данных на сервер */}
                <button type="submit" className="img-upload__submit" id="upload-submit">
                  Опубликовать
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={closeErrorModal} />
    </section>
  );
};

export default ImgUpload;
