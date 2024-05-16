// Styled Components
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Div = styled.div`
    height: 100%;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    color: greenyellow;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    color: greenyellow;
`

const StyledParallax = styled(Parallax)`
    z-index: 0;
    top:0;
    height: 100%;
`

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledParallaxBackgroundLayer = styled(ParallaxLayer)`
    background-image: linear-gradient(blueviolet, rgb(173, 216, 230));
    background-size: 100%;
    opacity: 0.5;
`

const StyledImg = styled.img`
    position: absolute;
    rotate: 180deg;
    top: 200px;
    left: 100px;
`


export { Div, H1, H2, StyledParallax, StyledParallaxLayer, StyledParallaxBackgroundLayer, StyledImg }