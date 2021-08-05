// import rfs from '~rfs/scss';
import { createGlobalStyle } from 'styled-components';

import rfs from './rfs';

export default createGlobalStyle`
  /* ${rfs(`9rem`)} */
  :root{
    font-size: 62.5%;

    --white: #fff;
    --purple: purple;
  }

  html {
    background: linear-gradient(205deg,rgba(14, 8, 35, 1) 0%,rgba(60, 31, 139, 1) 100%);
  }
  
  html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
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
