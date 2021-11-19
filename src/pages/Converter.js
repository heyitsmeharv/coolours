import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Bottombar from '../components/Bottombar/Bottombar';

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(-45deg, ${props => props.colourOne}, ${props => props.colourTwo});
  background-size: 400% 400%;
  -webkit-animation: backgroundAnimation 5s ease infinite;
  animation: backgroundAnimation 5s ease infinite;

  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Converter = () => {

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
      colourOne={'#ee7752, #e73c7e'}
      colourTwo={'#23a6d5, #23d5ab'}
    >

      <Bottombar />
    </Background>
  );
}

export default Converter;
