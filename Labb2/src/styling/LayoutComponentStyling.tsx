import { NavLink } from 'react-router-dom';
// Styled Components
import styled from 'styled-components';


const Navbar = styled.nav`
    position: absolute;
    top: 0;
    padding-left: 20px;
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
    width: 50px;
    height: 50px;
    &.active {
    background: darkviolet;
  }
`



export { Navbar, Ul, Li, StyledLink }
