import React, { useState } from "react";
import styled from 'styled-components';

import { Button, ButtonWrapper } from './components/Button/Button';
import { Tile, TileWrapper } from './components/Tile/Tile'

import { SaveAlt } from '@styled-icons/material-rounded/SaveAlt'

import colour from './resources/styles/colours';

const Background = styled.div`
  background: linear-gradient(-45deg, ${props => props.colourOne}, ${props => props.colourTwo});
  background-size: 400% 400%;
  -webkit-animation: backgroundAnimation 10s ease infinite;
  animation: backgroundAnimation 10s ease infinite;

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

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  padding: 15px;
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const StyledIcon = styled(SaveAlt)`
  width: 50px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const App = () => {
  const [colours] = useState(colour);
  const [randomColour, setRandomColour] = useState();

  // random property from object
  const randomProperty = obj => {
    let keys = Object.keys(obj);
    return obj[keys[Math.floor(Math.random() * keys.length)]];
  };

  const generateColours = () => {
    // if no presets, random categories for each.
    let colourCategoryOne = colours[Math.floor(Math.random() * colours.length)];
    let colourCategoryTwo = colours[Math.floor(Math.random() * colours.length)];

    // refactor to not call function twice
    let categoryOne = randomProperty(colourCategoryOne);
    let categoryTwo = randomProperty(colourCategoryTwo);
    let colourOne = randomProperty(categoryOne);
    let colourTwo = randomProperty(categoryTwo);

    setRandomColour([colourOne, colourTwo]);
    console.log(randomColour);
  }

  return (
    <Background
      colourOne={randomColour ? randomColour[0].hex : '#ee7752, #e73c7e'}
      colourTwo={randomColour ? randomColour[1].hex : '#23a6d5, #23d5ab'}>
      <AppContainer>
        <HeaderWrapper>
          <h2>Colour Generator</h2>
        </HeaderWrapper>
        <TileWrapper>
          <Tile colour={randomColour ? randomColour[0].hex : ''} />
          <Tile colour={randomColour ? randomColour[1].hex : ''} />
        </TileWrapper>
        <ButtonWrapper onClick={() => generateColours()}>
          <Button text="Generate Colours" />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => generateColours()}>
          <StyledIcon />
        </ButtonWrapper>
      </AppContainer>
    </Background>
  );
}

export default App;
