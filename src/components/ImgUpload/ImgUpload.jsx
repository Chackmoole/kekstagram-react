import React, { useState } from 'react';
import EffectsList from 'components/EffectsList/EffectsList';

const ImgUpload = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // console.log('isModalOpen', isModalOpen);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
                    <button type="button" className="scale__control  scale__control--smaller">
                      Уменьшить
                    </button>
                    <input
                      type="text"
                      className="scale__control  scale__control--value"
                      value="55%"
                      title="Image Scale"
                      name="scale"
                      readOnly
                    />
                    <button type="button" className="scale__control  scale__control--bigger">
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
    </section>
  );
};

export default ImgUpload;
