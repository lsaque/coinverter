import { createGlobalStyle } from 'styled-components';

import Blur from '../images/blur.png';

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
    overflow-x: hidden;

    --white: #fff;
    --purple: purple;
  }

  html {
    background:
      url(${Blur}), 
      linear-gradient(
        205deg,rgba(14, 8, 35, 1) 0%,
        rgba(60, 31, 139, 1) 100%
      );
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
  }
  
  html, border-style, #root{
    /* max-height: 100vh; */
    max-width: 100vw;

    height: 100vh;
    width: 100%;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Poppins;
  }
`;
