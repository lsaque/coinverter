import React from 'react';

import { 
  Container, 
  CircleIcon, 
  Title,
  Top, 
  Information, 
  Mid, 
  SquareIcon, 
  Bot
} from './styles';

import Square from '../../assets/images/square.png';
import Circle from '../../assets/images/circle.png';


const Content: React.FC = () => {
  return(
    <Container>
      <Top>
        <Title>
          <h1>Discover New & <br/>Currency
            <CircleIcon src={ Circle }/>
          </h1>
        </Title>
        <Information filled>
          <span 
            role="img" 
            aria-label="thinking"
          >👾</span>
          {/* 🤔 */}
        </Information>
      </Top>

      <Mid>
        <SquareIcon src={ Square }/>
        <h2>A Cryptocurrency Bank Accoun For More Trusting Inancial Transaction & More Reliable Currency For Better Future Finance</h2>
      </Mid>

      <Bot>
        <h3>Ultima Atualização: 1 Min 5 Segs | <span>Dólar: R$5,01</span></h3>
      </Bot>
        
    </Container>
  ) 
}

export default Content;