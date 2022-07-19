const MAX_COUNT_HASHTAGS = 5;
const MIN_LENGTH_HASHTAGS = 2;
const MAX_LENGTH_HASHTAGS = 20;
const regExpValidCharacters = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const textErrors = {
  maxCount: `количество Хэштегов не должно превышать ${MAX_COUNT_HASHTAGS}`,
  characters: `Хэштеги должны начинаться с символа #, содержать буквы и цифры, не менее ${MIN_LENGTH_HASHTAGS} и не более ${MAX_LENGTH_HASHTAGS} символов`,
  repeat: `Хэштеги не должны повторяться`,
};

const isHashtagsUnique = (elements) => {
  const result = [];

  elements.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return elements.length === result.length;
};

const isHashtagsValid = (value) => {
  const result = {
    isValid: false,
    error: '',
  };

  const hashtags = value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((hashtag) => hashtag);

  if (hashtags.length > MAX_COUNT_HASHTAGS) {
    result.error = textErrors.maxCount;
    return result;
  }

  if (!isHashtagsUnique(hashtags)) {
    result.error = textErrors.repeat;
    return result;
  }
  const isCharacterValid = hashtags.every((item) => regExpValidCharacters.test(item));
  if (!isCharacterValid) {
    result.error = textErrors.characters;
    return result;
  }

  result.isValid = true;

  return result;
};

export { isHashtagsValid };
