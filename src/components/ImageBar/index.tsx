import React from 'react';

import { Container, Image, Wrapper } from './styles';
import Smarphone from '../../assets/images/smartphone.svg';

const ImageBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={Smarphone}/>
      </Wrapper>
    </Container>
  );
}

export default ImageBar;