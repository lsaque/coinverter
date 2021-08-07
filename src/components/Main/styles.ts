import styled from 'styled-components';

import CoinBg from '../../assets/images/coin.svg';

export const Container = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const Top = styled.div`
  padding: 30px 9%;  

  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: url(${ CoinBg });
  background-repeat: no-repeat;
  background-position: left bottom;
  background-position-y: 105%;
  background-size: contain;

  @media (max-width: 768px){
    padding: 30px 20px;  
    background-size: 120%;
    background-position-y: 102%;
  }
`;

export const Bot = styled.div`
  width: 100%;
`;