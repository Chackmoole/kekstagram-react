import React from 'react';
import LoadingModal from 'components/LoadingModal/LoadingModal';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import Footer from 'components/Footer/Footer';
import ImgFilters from 'components/ImgFilters/ImgFilters';
import Pictures from 'components/Pictures/Pictures';

const App = () => (
  <>
    <main>
      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />
      {/* Контейнер для изображений от других пользователей */}
      <Pictures />
    </main>

    <Footer />
    {/* Сообщение с ошибкой загрузки изображения */}
    <ErrorModal />
    {/* Экран загрузки изображения */}
    <LoadingModal />
  </>
);

export default App;
