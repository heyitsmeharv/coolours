import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { StyledButton } from '../components/Button/Button';
import Bottombar from '../components/Bottombar/Bottombar';

const Background = styled.div`
  height: 100vh;
  background: ${props => props.colour}
`;

const HeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  font-size: 42px;
  font-weight: 200;
  line-height: 60px;
  text-align: center;
  margin-top: -30px;
  -webkit-tap-highlight-color: transparent;
  text-transform: none;
  letter-spacing: 3px;
`;

const Random = () => {
  const [colour, setColour] = useState('');
  const [noColoursGenerated, setNoColoursGenerated] = useState(false);

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const copyToClipboard = colour => {
    if (!!colour) {
      navigator.clipboard.writeText(colour);
    }
  };


  return (
    <Background
      colour={'#ee7752'}
    >
      {noColoursGenerated ?
        <HeadingWrapper>
          <h1>Press Spacebar</h1>
        </HeadingWrapper>
        : <HeadingWrapper>
          <h1>Press Spacebar</h1>
        </HeadingWrapper>
      }
      <Bottombar />
    </Background>
  );
}

export default Random;
