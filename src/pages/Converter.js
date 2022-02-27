import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';

import { StyledButton } from '../components/Button/Button';
import Bottombar from '../components/Bottombar/Bottombar';

const Background = styled.div`
  height: 100vh;
  background: ${props => props.colour}
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledInput = styled.input`
  color: ${props => props.textColour};
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
    color: ${props => props.textColour};
  }

  ${props => props.hex && css`
    margin-bottom: 15px;
  `}
`;

const Converter = () => {
  const [rgbString, setRGBString] = useState(null);
  const [rgb, setRGB] = useState({
    r: '',
    g: '',
    b: '',
  });
  const [hexString, setHexString] = useState('#ee7752');
  const [hex, setHex] = useState(null);
  const [textColour, setTextColour] = useState('#000');

  const hexChange = value => {
    setRGB(hexToRgb(value));
    setRGBString(rgb);
    const brightness = Math.round(((parseInt(rgb?.r) * 299) +
      (parseInt(rgb?.g) * 587) +
      (parseInt(rgb?.b) * 114)) / 1000);

    setTextColour((brightness > 125) ? '#000' : '#FFF');
  }

  const rgbChange = value => {
    setRGB({
      ...rgb,
      r: value?.substring(0, 3),
      g: value?.substring(4, 7),
      b: value?.substring(8, 11),
    })
    setHex(rgbToHex(rgb));
    setHexString('#' + hex);

    const brightness = Math.round(((parseInt(rgb?.r) * 299) +
      (parseInt(rgb?.g) * 587) +
      (parseInt(rgb?.b) * 114)) / 1000);

    setTextColour((brightness > 125) ? '#000' : '#FFF');
  }


  const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      setRGB({
        ...rgb,
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      })
      : null;
  };

  const rgbToHex = (rgb) => {
    return "#" + ((1 << 24) + (rgb?.r << 16) + (rgb?.g << 8) + rgb?.b).toString(16).slice(1);
  };

  return (
    <Background
      colour={hexString}
    >
      <FlexBox>
        <StyledInput hex type="text" placeholder="hex" value={hexString} onChange={(e => hexChange(e.target.value))} />
        <StyledInput type="text" placeholder="rgb" value={rgbString} onChange={(e => rgbChange(e.target.value))} />
      </FlexBox>
      <Bottombar textColour={textColour} />
    </Background>
  );
}

export default Converter;
