import { NavLink } from 'react-router-dom';
// Styled Components
import styled from 'styled-components';


const Navbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding-left: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: row;
`;


const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
`

const Li = styled.li`
    padding-top: 10px;
    padding-right: 5px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 20px;
    border-radius: 10px;
    color: white;
    background: blueviolet;
    display:block;
    &.active {
    background: lightblue;
  }
`



export { Navbar, Ul, Li, StyledLink }
