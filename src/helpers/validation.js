const MAX_COUNT_HASHTAGS = 5;
const MIN_LENGTH_HASHTAGS = 2;
const MAX_LENGTH_HASHTAGS = 20;
const regExpValidCharacters = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const textErrors = {
  maxCount: `количество Хэштегов не должно превышать ${MAX_COUNT_HASHTAGS}`,
  firstLetter: 'Хэштеги должны начинаться с символа #',
  characters: 'Хэштеги должны состоять только из букв и цифр',
  length: `Хэштеги должны быть не менее ${MIN_LENGTH_HASHTAGS} и не более ${MAX_LENGTH_HASHTAGS} символов`,
  repeat: `Хэштеги не должны повторяться`,
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

  const isFirstLetterValid = hashtags.every((item) => item[0] === '#');
  if (!isFirstLetterValid) {
    result.error = textErrors.firstLetter;
    return result;
  }

  const isLengthValid = hashtags.every(
    (item) => item.length >= MIN_LENGTH_HASHTAGS && item.length <= MAX_LENGTH_HASHTAGS
  );
  if (!isLengthValid) {
    result.error = textErrors.length;
    return result;
  }

  const isHashtagsUnique = (elements) => {
    const result = [];

    elements.forEach((element) => {
      if (!result.includes(element)) {
        result.push(element);
      }
    });
    return elements.length === result.length;
  };

  if (!isHashtagsUnique(hashtags)) {
    result.error = textErrors.repeat;
    return result;
  }

  const isCharacterValid = hashtags.every((item) => regExpValidCharacters.test(item));
  if (!isCharacterValid) {
    result.error = textErrors.characters;
    return result;
  }

  if (
    hashtags.length <= MAX_COUNT_HASHTAGS ||
    isFirstLetterValid ||
    isCharacterValid ||
    isLengthValid ||
    isHashtagsUnique(hashtags)
  ) {
    result.isValid = true;
  }
  return result;
};

export { isHashtagsValid };
