import React from 'react';

import { 
  Container,
  Top,
  Bot
} from './styles';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';


const Main: React.FC = () => {
  return (
    <Container>
      <Top>
        <Header/>
        <Content/>
      </Top>
      <Bot>
        <Footer/>
      </Bot>
    </Container>
  );
}

export default Main;