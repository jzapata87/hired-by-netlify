import React from 'react';
import Section from 'wrappers/Section';
import Box from 'wrappers/Box';
import StyledLink from 'wrappers/StyledLink';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { space, layout, color, flexbox, typography } from 'styled-system';


const Nav = styled('nav')(
  {
    display: "flex",
    flexDirection: 'row',
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  flexbox
)


function Navbar({ title }) {
  return (
    <Section
      bg="moon-gray"
    >
      <Nav width='80%' mx='auto' py={2}>
        <StyledLink to="/" m={1}>Hired by Netlify</StyledLink>
        <Box mx='auto'></Box>
        <StyledLink to="/" m={1}>Link 1</StyledLink>
      </Nav>
    </Section>
  );
}

export default Navbar;
