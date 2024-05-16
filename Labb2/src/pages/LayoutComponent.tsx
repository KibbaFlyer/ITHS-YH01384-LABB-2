import React from "react";
import { Outlet } from "react-router-dom";

// Styled Components
import { Navbar, Ul, Li, StyledLink } from '../styling/LayoutComponentStyling';

const LayoutComponent: React.FC = () => {
  return (
    <>
      <Navbar>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/lyrics">Lyrics</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/lyrics">Lyrics</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/lyrics">Lyrics</StyledLink>
          </Li>
        </Ul>
      </Navbar>

      <Outlet />
    </>
  )
};

export default LayoutComponent;