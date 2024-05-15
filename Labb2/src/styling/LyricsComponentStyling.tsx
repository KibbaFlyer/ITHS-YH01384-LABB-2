// Styled Components
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
`;

const H2Comp = styled.h2`
  margin: 10px;
`;

const Input = styled.input`
  font-size: 15px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`;

const Button = styled.button`
  box-shadow: 0 0 16px 0 blueviolet;
  border-radius: 10px;

  &:not(:disabled):hover {
    border-color: #646cff;
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const InputContainer = styled.div`
  background: blueviolet;
  box-shadow: 0 0 16px 0 blueviolet;
  border-radius: 10px;
`;

const LyricsContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);
  color: white;
  margin: 20px;
  border-radius: 10px;
  width: 100%;
`;

export { Container, H2Comp, Input, Button, InputContainer, LyricsContainer }