const MAX_COUNT_HASHTAGS = 5;
const MIN_LENGTH_HASHTAGS = 2;
const MAX_LENGTH_HASHTAGS = 20;
const regExpValidCharacters = /[A-Za-zА-Яа-яЁё0-9]/;

const textErrors = {
  maxCount: `количество Хэштегов не должно превышать ${MAX_COUNT_HASHTAGS}`,
  firstLetter: 'Хэштеги должны начинаться с символа #',
  characters: 'Хэштеги должны состоять только из букв и цифр',
  length: `Хэштеги должны быть не менее ${MIN_LENGTH_HASHTAGS} и не более ${MAX_LENGTH_HASHTAGS} символов`,
  repeat: `Хэштеги не должны повторяться`,
};

const isHashtagsValid = (value) => {
  const isFormValid = {
    isValid: true,
    error: '',
  };

  const hashtags = value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((hashtag) => hashtag);

  if (hashtags.length > MAX_COUNT_HASHTAGS) {
    isFormValid.error = textErrors.maxCount;
  }

  const isFirstLetterValid = hashtags.every((item) => item[0] === '#');
  if (!isFirstLetterValid) {
    isFormValid.error = textErrors.firstLetter;
  }

  const isCharacterValid = hashtags.every((item) => regExpValidCharacters.test(item));
  if (!isCharacterValid) {
    isFormValid.error = textErrors.characters;
  }

  const isLength = (element) => {
    return element.length >= MIN_LENGTH_HASHTAGS && element.length <= MAX_LENGTH_HASHTAGS;
  };

  const isLengthValid = hashtags.every((item) => isLength(item));
  if (!isLengthValid) {
    isFormValid.error = textErrors.length;
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
    isFormValid.error = textErrors.repeat;
  }

  if (
    hashtags.length > MAX_COUNT_HASHTAGS ||
    !isFirstLetterValid ||
    !isCharacterValid ||
    !isLengthValid ||
    !isHashtagsUnique(hashtags)
  ) {
    isFormValid.isValid = false;
  }
  return isFormValid;
};

export { isHashtagsValid };
