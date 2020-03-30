import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalstyle';
import App from './App';
import config from './styles/grid-config';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ awesomegrid: config }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
