import React, { useState } from "react";
import styled from 'styled-components';

// components
import { Button, ButtonWrapperCenter, ButtonWrapperRight } from './components/Button/Button';
import Drawer from './components/Drawer/Drawer';
import { Tile, TileWrapper } from './components/Tile/Tile';

// icons
import { StyledSaveIcon, StyledLeftIcon, StyledRightIcon } from './components/Icons/Icons';

// resources
import colourList from './resources/styles/colours';

const Background = styled.div`
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

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const HeaderWrapper = styled.div`
  padding: 15px;
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [colours] = useState(colourList);
  const [randomColour, setRandomColour] = useState();
  const [savedColours, setSavedColours] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);


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
    setIsEmpty(false);
  }

  const saveColour = colour => {
    // don't want to save empty colour sets
    if (colour !== '') {
      const newColours = [...savedColours, colour];
      setSavedColours(newColours);
    } else {
      // set an error message
      setIsEmpty(true);
    }
  };

  return (
    <Background
      colourOne={randomColour ? randomColour[0].hex : '#ee7752, #e73c7e'}
      colourTwo={randomColour ? randomColour[1].hex : '#23a6d5, #23d5ab'}>
      <AppContainer>
        <HeaderWrapper>
          <h2>Colour Generator</h2>
        </HeaderWrapper>
        <ContentContainer>
          <TileWrapper>
            <Tile colour={randomColour ? randomColour[0].hex : ''} />
            <Tile colour={randomColour ? randomColour[1].hex : ''} />
          </TileWrapper>
          <ButtonWrapperCenter onClick={() => generateColours()}>
            <Button text="Generate Colours" />
          </ButtonWrapperCenter>
          <ButtonWrapperCenter onClick={() => saveColour(randomColour ? randomColour : '')}>
            <StyledSaveIcon />
          </ButtonWrapperCenter>
          {isEmpty &&
            <ErrorText>You can't save an empty set</ErrorText>
          }
        </ContentContainer>
        <ButtonWrapperRight onClick={toggleDrawer}>
          {!isDrawerOpen ?
            <StyledLeftIcon /> : <StyledRightIcon />
          }
        </ButtonWrapperRight>
        <SideBarContainer>
          <Drawer contents={savedColours} isDrawerOpen={isDrawerOpen} />
        </SideBarContainer>
      </AppContainer>
    </Background>
  );
}

export default App;
