import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import AppRouter from './routes/Routes';
import './i18n';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import { materialTheme } from './theme.material';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={materialTheme}>
      <AppRouter/>
    </ThemeProvider>
  </Provider>
);
