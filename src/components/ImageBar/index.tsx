import React from 'react';

import { Container,Smartphone, Wrapper, Prism, Triangle, BoxImageContent} from './styles';
// import Smarphone from '../../assets/images/smartphone.svg';
import Smarphone from '../../assets/images/smartphone.png';
import PrismIcon from '../../assets/images/prism.png';
import TriangleIcon from '../../assets/images/triangle.png';

const ImageBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>

      <BoxImageContent>
        <Smartphone src={Smarphone}/>
        <Prism src={PrismIcon}/>
        <Triangle src={TriangleIcon}/>
      </BoxImageContent>

      </Wrapper>
    </Container>
  );
}

export default ImageBar;