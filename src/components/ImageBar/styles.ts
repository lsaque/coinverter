import styled from 'styled-components';

import Background from '../../assets/images/ImageBarBackground.png'

export const Container = styled.div`
  background: url( ${ Background } );
  background-position: top center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  height: 100%;
  width: 30%;

  @media (max-width: 768px){
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  border: 1px solid red;

  
`;

export const Image = styled.img`
  width:100%;
`;