import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components';

import chroma from 'chroma-js';

import { StyledButton } from '../components/Button/Button';
import Bottombar from '../components/Bottombar/Bottombar';

const Background = styled.div`
  height: 100vh;
  background: ${props => props.colour}
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Random = () => {
  const [randomColour, setRandomColour] = useState(null);
  const [textColour, setTextColour] = useState('#000');

  useEffect(() => {
    const rgb = hexToRgb(randomColour);
    const brightness = Math.round(((parseInt(rgb?.r) * 299) +
      (parseInt(rgb?.g) * 587) +
      (parseInt(rgb?.b) * 114)) / 1000);
    setTextColour((brightness > 125) ? '#000' : '#FFF');
  }, [randomColour])

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    copyToClipboard(color);
    setRandomColour(color);
  }

  const copyToClipboard = colour => {
    if (!!colour) {
      navigator.clipboard.writeText(colour);
    }
  };

  const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const handleSpace = e => {
    if (e.keyCode === 32) {
      getRandomColor();
    }
  };

  return (
    <Background
      colour={randomColour ? randomColour : chroma.random()}
    >
      <FlexBox>
        {randomColour === null ? (
          <StyledButton
            textColour={textColour}
            onClick={() => getRandomColor()}
            onKeyDown={(e) => handleSpace(e)}
            autoFocus
          >
            Press Spacebar
          </StyledButton>
        ) : (
          <StyledButton
            textColour={textColour}
            autoFocus onKeyDown={(e) => handleSpace(e)}
            onClick={() => getRandomColor()}>
            {randomColour}
          </StyledButton>
        )}
      </FlexBox>
      <Bottombar textColour={textColour} />
    </Background>
  );
}

export default Random;
