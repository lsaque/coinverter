import styled from 'styled-components';

import Background from '../../assets/images/bg.png'
import Bottom from '../../assets/images/liquid.png'

export const Container = styled.div`

  background: url(${ Bottom }), url(${ Background });
  background-position: bottom, center;
  background-size: contain, cover;
  background-repeat: no-repeat;
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;

  height: 100%;
  width: 25%;

  @media (max-width: 768px){
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxImageContent = styled.div`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;

  height: 500px;
  width: 300px;
`;

export const Smartphone = styled.img`
  width: 90%;
  
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  z-index: 1;

  @keyframes float {
	0% {
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.4));
		transform: translatey(0px);
	}
	50% {
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.2));
		transform: translatey(-20px);
	}
	100% {
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.4));
		transform: translatey(0px);
	}
}
`;

export const Prism = styled.img`
  position: absolute;
  display: block;

  max-width: 360px;
  width: calc(20vw - 20%);

  top: calc(-10vw + 1%);
  left: 60%;

  @media (min-width: 2000px){
    width: 100%;
    top: -40%;
  }

  @media (orientation: portrait) {
    display: none;
  }

  @keyframes rotating{
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Triangle = styled.img`
  position: absolute;
  display: block;

  max-width: 360px;
  width: calc(15vw - 28%);

  top: calc(90vh - 95%);
  right: 70%;

  z-index: 2;

  @media (min-width: 2000px){
    width: 70%;
    top: 75%;
  }

  @media (orientation: portrait) {
    display: none;
  }
`;