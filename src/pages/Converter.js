import React, { useState } from "react";
import styled, { css } from 'styled-components';

import chroma from 'chroma-js';

import Bar from '../components/Bar/Bar';

const Background = styled.div`
  height: 100vh;
  background: ${props => props.color}
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledInput = styled.input`
  color: ${props => props.textColor};
  outline: none;
  border: none;
  display: block;
  width: 335px;
  font-size: 34px;
  line-height: 44px;
  background: 0 0;
  border: none;
  border-bottom: 1px dotted rgba(0,0,0,.4);
  padding: 5px 0;
  border-radius: 0;

  ::placeholder {
    color: ${props => props.textColor};
  }

  ${props => props.hex && css`
    margin-bottom: 15px;
  `}
`;

const Converter = () => {
  const [hexValue, setHexValue] = useState('#3291f2');
  const [rgbaValue, setRgbaValue] = useState('');
  const [textColor, setTextColor] = useState('#000');

  const hexToRgba = hex => {
    setRgbaValue(
      `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, 1)`
    );
    const brightness = Math.round(((parseInt(hex.slice(1, 3), 16) * 299) +
      (parseInt(hex.slice(3, 5), 16) * 587) +
      (parseInt(hex.slice(5, 7), 16) * 114)) / 1000);
    setTextColor((brightness > 125) ? '#000' : '#FFF');
  };

  const rgbToHex = rgba => {
    setHexValue(
      rgba.replace(/rgba?\(|\)/g, '')
        .split(',')
        .map(value => parseInt(value).toString(16).padStart(2, '0'))
        .join('')
    );

    if (hexValue.slice) {
      const brightness = Math.round(((parseInt(hexValue.slice(1, 3), 16) * 299) +
        (parseInt(hexValue.slice(3, 5), 16) * 587) +
        (parseInt(hexValue.slice(5, 7), 16) * 114)) / 1000);
      setTextColor((brightness > 125) ? '#000' : '#FFF');
    }
  };

  const handleSpace = e => {
    if (e.keyCode === 32) {
      setHexValue(chroma.random());
    }
  };

  const handleOnChange = (value, target) => {
    target === 'hex' ? setHexValue(value) : setRgbaValue(value);
    target === 'hex' ? hexToRgba(value) : rgbToHex(value);
  }

  return (
    <Background
      color={hexValue}
      onKeyDown={(e) => handleSpace(e)}
    >
      <FlexBox>
        <StyledInput hex type="text" placeholder="hex" value={hexValue} onChange={e => handleOnChange(e.target.value, 'hex')} />
        <StyledInput type="text" placeholder="rgba" value={rgbaValue} onChange={e => handleOnChange(e.target.value, 'rgba')} />
      </FlexBox>
      <Bar textColor={textColor} />
    </Background>
  );
}

export default Converter;
