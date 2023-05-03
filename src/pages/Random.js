import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import chroma from 'chroma-js';

import { StyledButton } from '../components/Button/Button';
import Bar from '../components/Bar/Bar';

const Background = styled.div`
  height: 100vh;
  background: ${props => props.color}
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Random = () => {
  const [randomColor, setRandomColor] = useState(null);
  const [textColor, setTextColor] = useState('#000');

  useEffect(() => {
    const rgb = hexToRgb(randomColor);
    const brightness = Math.round(((parseInt(rgb?.r) * 299) +
      (parseInt(rgb?.g) * 587) +
      (parseInt(rgb?.b) * 114)) / 1000);
    setTextColor((brightness > 125) ? '#000' : '#FFF');
  }, [randomColor])

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    copyToClipboard(color);
    setRandomColor(color);
  }

  const copyToClipboard = color => {
    if (!!color) {
      navigator.clipboard.writeText(color);
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
      e.preventDefault();
    }
  };

  return (
    <Background
      color={randomColor ? randomColor : chroma.random()}
    >
      <FlexBox>
        {randomColor === null ? (
          <StyledButton
            textColor={textColor}
            onClick={() => getRandomColor()}
            onKeyDown={(e) => handleSpace(e)}
            autoFocus
          >
            Press Spacebar
          </StyledButton>
        ) : (
          <StyledButton
            textColor={textColor}
            autoFocus onKeyDown={(e) => handleSpace(e)}
            onClick={() => getRandomColor()}>
            {randomColor}
          </StyledButton>
        )}
      </FlexBox>
      <Bar textColor={textColor} />
    </Background>
  );
}

export default Random;
