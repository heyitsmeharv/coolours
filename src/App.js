import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';

import { Button, ButtonWrapper } from './components/Button/Button';
import { Tile, TileWrapper } from './components/Tile/Tile';

// import colour from './resources/styles/colours';

const Background = styled.div`
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: backgroundAnimation 15s ease infinite;
  animation: backgroundAnimation 15s ease infinite;

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
`

const App = () => {
  return (
    <Background>
      <AppContainer>
        <HeaderWrapper>
          <h2>Colour Generator</h2>
        </HeaderWrapper>
        <TileWrapper>
          <Tile />
          <Tile />
        </TileWrapper>
        <ButtonWrapper>
          <Button text="Generate Colours" />
        </ButtonWrapper>
      </AppContainer>
    </Background>
  );
}

export default App;
