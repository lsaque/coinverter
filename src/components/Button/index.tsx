import styled from 'styled-components';

interface Props{
  filled ?: boolean;
}

export default styled.button<Props>`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out 0s;

  border: ${(props) => (props.filled ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent')};

  &:hover{
    background: rgba(255, 255, 255, 0.1);
    box-shadow: rgb(0 0 0 / 25%) 0px 40px 80px, rgb(255 255 255 / 15%) 0px 0px 0px 0.5px inset;
    border: ${(props) => (props.filled ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.2)')};
  }
`;