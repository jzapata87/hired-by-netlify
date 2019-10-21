import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

const GatsbyLink = ({ className, children, to }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.sansSerif};
  color: black;

  &:hover {
    color: white;
  }


  ${space}
  ${typography}
`;



// const StyledLink = styled(GatsbyLink)(
//   {
//   color: 'black',
//   textDecoration: 'none',
//   '&:hover,&:focus,.active': {
//         color: 'white',
//       }
//   },
//   space,
//   typography
// )





export default StyledLink;
