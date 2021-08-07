import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  display: block;
  max-width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Login = styled(Button)`
  @media (max-width: 768px){
    display:none;
  }
`;

export const SignIn = styled(Button)`
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  
  @media (max-width: 360px){
    display:none;
  }
`;