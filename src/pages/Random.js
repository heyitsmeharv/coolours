import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

const CopyText = styled(motion.p)`
  color: ${props => props.textColour};
  font-size: 42px;
  font-weight: 200;
  line-height: 60px;
`;

const Random = () => {
  const [randomColour, setRandomColour] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
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
    setRandomColour(color);
  }

  const copyToClipboard = colour => {
    if (!!colour) {
      navigator.clipboard.writeText(colour);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
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
      colour={randomColour ? randomColour : '#ee7752'}
    >
      {!copySuccess ? (
        <FlexBox>
          {randomColour === null ? (
            <StyledButton
              textColour={textColour}
              autoFocus onKeyDown={() => getRandomColor()}>
              Press Spacebar
            </StyledButton>
          ) : (
            <StyledButton textColour={textColour}
              autoFocus onKeyDown={(e) => handleSpace(e)}
              onClick={() => copyToClipboard(randomColour ? randomColour : null)}>
              {randomColour}
            </StyledButton>
          )}
        </FlexBox>
      ) : (
        <FlexBox>
          <CopyText textColour={textColour}
            animate={{ scale: 2 }} transition={{ duration: 0.2 }}>Copied!</CopyText>
        </FlexBox>
      )}
      <Bottombar textColour={textColour} />
    </Background>
  );
}

export default Random;
