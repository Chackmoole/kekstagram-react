import React from 'react';
import SuccessModal from '../SuccessModal/SuccessModal';
import LoadingModal from 'components/LoadingModal/LoadingModal';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import Picture from 'components/Picture/Picture';
import Footer from 'components/Footer/Footer';
import BigPicture from 'components/BigPicture/BigPicture';
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
    {/* Сообщение об успешной загрузке изображения */}
    {/*<SuccessModal />*/}
    {/* Экран загрузки изображения */}
    <LoadingModal />
  </>
);

export default App;
