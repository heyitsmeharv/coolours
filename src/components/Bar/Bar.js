import React from 'react';
import styled from 'styled-components';

import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Container = styled.section`
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Bar = ({ textColor }) => {
  const isConverter = (/convert/.test(window.location.href))
  return (
    <Container>
      {!isConverter ?
        <StyledNavButton textColor={textColor}>
          <StyledNavLink
            textColor={textColor}
            exact to='/convert'
          >
            HEX / RGB Converter
          </StyledNavLink>
        </StyledNavButton>
        :
        <StyledNavButton textColor={textColor}>
          <StyledNavLink
            textColor={textColor}
            exact to='/random'
          >
            Random Colour
          </StyledNavLink>
        </StyledNavButton>
      }
      |
      <StyledNavButton textColor={textColor} onClick={() => window.open('https://www.heyitsmeharv.com', '_blank')}>
        HeyItsMeHarv
      </StyledNavButton>
      |
      <StyledNavButton textColor={textColor} onClick={() => window.open('https://colour-generator.netlify.app', '_blank')}>
        v1
      </StyledNavButton>
    </Container >
  )
}

export default Bar;