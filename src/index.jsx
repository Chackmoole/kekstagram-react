import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'src/components/App/App';
import GlobalStyles from 'src/ui/global/globalStyles';

const AppComponent = () => (
  <>
    <GlobalStyles />
    <App />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
