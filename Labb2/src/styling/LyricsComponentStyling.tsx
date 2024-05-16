// Styled Components
import styled from 'styled-components';

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    gap: 20px;
    width: 100vw;
    z-index: 10;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
`;

const H2Comp = styled.h2`
    color: white;
    margin: 10px;
`;

const Input = styled.input`
    font-size: 15px;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    color: black;
`;

const Button = styled.button`
    box-shadow: 0 0 4px 0 blueviolet;
    border-radius: 10px;
    background: blueviolet;
    color: white;
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
    box-shadow: 0 0 4px 0 blueviolet;
    border-radius: 10px;
`;

const LyricsContainer = styled.div`
    background: #242424BB;
    box-shadow: 0 4px 16px 0 rgba(173, 216, 230, 0.9);
    color: white;
    width: 50%;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;


export { ComponentContainer, RowContainer, H2Comp, Input, Button, InputContainer, LyricsContainer }