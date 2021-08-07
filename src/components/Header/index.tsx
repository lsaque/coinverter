import React from 'react';

import { 
  Container, 
  Logo, 
  Menu, 
  Login, 
  SignIn
} from './styles';

import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo}/>
      <Menu>
        <Login>Entrar</Login>
        <SignIn filled>Inscrever-se</SignIn>
      </Menu>
    </Container>
  );
}

export default Header;