import React from 'react';

import ImageBar from '../ImageBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImageBar/>
        <Main/>
      </Wrapper>
    </Container>
  );
}

export default Layout;