import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';

import chroma from 'chroma-js';

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
  const [rgb, setRGB] = useState({
    r: '',
    g: '',
    b: '',
  });
  const [hexString, setHexString] = useState(chroma.random());
  const [rgbString, setRGBString] = useState(hexString._rgb?._unclipped.join(',') + ')');
  const [textColour, setTextColour] = useState('#000');

  useEffect(() => {
    if (hexString._rgb) {
      setRGB({
        r: hexString?._rgb[0],
        g: hexString?._rgb[1],
        b: hexString?._rgb[2],
      });
      setRGBString('rgb(' + hexString?._rgb?._unclipped.slice(0, -1).join(',') + ')');
      setHexString("#" + ((1 << 24) + (rgb?.r << 16) + (rgb?.g << 8) + rgb?.b).toString(16).slice(1));
      const brightness = Math.round(((parseInt(rgb?.r) * 299) +
        (parseInt(rgb?.g) * 587) +
        (parseInt(rgb?.b) * 114)) / 1000);
      setTextColour((brightness > 125) ? '#000' : '#FFF');
    }
  }, [hexString, rgbString]);

  const handleSpace = e => {
    if (e.keyCode === 32) {
      setHexString(chroma.random());
    }
  };

  return (
    <Background
      colour={hexString}
      onKeyDown={(e) => handleSpace(e)}
    >
      <FlexBox>
        <StyledInput hex type="text" placeholder="hex" value={hexString} onChange={(e => setHexString(e.target.value))} />
        <StyledInput type="text" placeholder="rgb" value={rgbString} onChange={(e => setRGBString(e.target.value))} />
      </FlexBox>
      <Bottombar textColour={textColour} />
    </Background>
  );
}

export default Converter;
