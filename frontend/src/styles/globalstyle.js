import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    background-color: #f0f0f5;
  }

  input, button, textarea {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;