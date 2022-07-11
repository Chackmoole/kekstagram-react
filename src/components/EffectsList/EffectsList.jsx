import React from 'react';

const EffectsList = () => {
  return (
    <ul className="effects__list">
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-none"
          value="none"
          checked
        />
        <label htmlFor="effect-none" className="effects__label">
          <span className="effects__preview  effects__preview--none">Превью фото без эффекта</span>
          Оригинал
        </label>
      </li>
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-chrome"
          value="chrome"
        />
        <label htmlFor="effect-chrome" className="effects__label">
          <span className="effects__preview  effects__preview--chrome">Превью эффекта Хром</span>
          Хром
        </label>
      </li>
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-sepia"
          value="sepia"
        />
        <label htmlFor="effect-sepia" className="effects__label">
          <span className="effects__preview  effects__preview--sepia">Превью эффекта Сепия</span>
          Сепия
        </label>
      </li>
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-marvin"
          value="marvin"
        />
        <label htmlFor="effect-marvin" className="effects__label">
          <span className="effects__preview  effects__preview--marvin">Превью эффекта Марвин</span>
          Марвин
        </label>
      </li>
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-phobos"
          value="phobos"
        />
        <label htmlFor="effect-phobos" className="effects__label">
          <span className="effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
          Фобос
        </label>
      </li>
      <li className="effects__item">
        <input
          type="radio"
          className="effects__radio  visually-hidden"
          name="effect"
          id="effect-heat"
          value="heat"
        />
        <label htmlFor="effect-heat" className="effects__label">
          <span className="effects__preview  effects__preview--heat">Превью эффекта Зной</span>
          Зной
        </label>
      </li>
    </ul>
  );
};

export default EffectsList;
