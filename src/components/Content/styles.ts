import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  max-height: 1080px;
  height: 100%;
  
  padding: 40px 0;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;

  > h1 {
    font-weight: 600;
    font-size: min(calc(6vw - 10%), 80px);
    line-height: 120%;

    @media (max-width: 768px){
      font-size: min(calc(9vw - 12%), 80px);
    }
  }
`;

export const CircleIcon = styled.img`
  max-width: 20px;
  max-height: 20px;

  @media (max-width: 768px){
    height: 12px;
    width: 12px;
  }
`;

export const Information = styled(Button)`
  margin-top: 1.5rem;
  padding: 6px 10px;

  > span {
    font-size: min(5vw, 25px);
  }

  @media (max-width: 768px){
    margin-top: 0;
  }
`;

export const Mid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > h2 { 
    margin-right: 5rem;
    font-size: min(3.2vw, 20px);
    font-weight: 300;
    width: 65%;

    @media (max-width: 768px){
      margin-right: 0;
      width: 100%;
    }
  }
`;

export const SquareIcon = styled.img`
  transform: rotate(0deg);
  padding-right: 4%;
`;

export const Bot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > h3 {
    font-weight: 300;
    color: #63587F;
    font-size: min(2.7vw, 18px);

    > span {
      color: var(--white);
    }
  }
`;