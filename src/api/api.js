const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const loadPhotos = () => {
  return fetch(`${API_URL}/data`).then((response) => response.json());
};

const sendData = (formData) => {
  console.log(formData);
  return fetch(API_URL, {
    method: 'POST',
    body: formData,
  });
};

export { loadPhotos, sendData };
