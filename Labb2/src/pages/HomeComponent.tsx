import React from "react";

// Styled Components
import styled from 'styled-components';

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
    color: lightblue;
`


const HomeComponent: React.FC = () => {
    return <H1>Home</H1>;
};

export default HomeComponent;