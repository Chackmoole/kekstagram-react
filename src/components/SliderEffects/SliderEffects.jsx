import React from 'react';
import Slider from 'nouislider-react';
import '../../../node_modules/nouislider/distribute/nouislider.css';

const SliderEffects = ({ options, onSliderChange, currentValue }) => {
  if (!options) {
    return null;
  }
  return (
    <fieldset className="img-upload__effect-level  effect-level">
      <input className="effect-level__value" name="effect-level" value={currentValue} />
      <div className="effect-level__slider">
        <Slider
          range={{ min: options.min, max: options.max }}
          start={options.max}
          step={options.step}
          onUpdate={(values) => {
            onSliderChange(Number(values[0]));
          }}
        />
      </div>
    </fieldset>
  );
};

export default SliderEffects;
