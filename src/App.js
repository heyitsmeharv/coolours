import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  margin-right: 22vh;
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
  height: fit-content;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const CopyText = styled(motion.p)`
  color: white;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.div``;

const App = () => {
  const [colours] = useState(colourList);
  const [randomColour, setRandomColour] = useState();
  const [savedColours, setSavedColours] = useState([]);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const [copySuccess, setCopySuccess] = useState(false);

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
    setIsDuplicate(false);
    setPlayAnimation(false);
  }

  const saveColour = colour => {
    // don't want to save empty colour sets
    if (colour !== '') {
      const colourOne = colour[0].colourName;
      const colourTwo = colour[1].colourName;
      // also don't want to be able to add duplicates
      let duplicated = savedColours.filter((t) => {
        return (t[0].colourName === colourOne && t[1].colourName === colourTwo);
      }).length > 0;

      if (!duplicated) {
        const newColours = [...savedColours, colour];
        setSavedColours(newColours);
        setIsDuplicate(false);
        setPlayAnimation(true);
      } else {
        setIsDuplicate(true);
      }
    } else {
      // set an error message
      setIsEmpty(true);
    }
  };

  const showFavorite = colour => {
    setRandomColour([colour[0], colour[1]]);
  }

  const clearFavorites = () => {
    const colours = [];
    setSavedColours(colours);
  };

  const deleteFavorite = index => {
    const newColours = [...savedColours];
    newColours.splice(index, 1);
    setSavedColours(newColours);
  };

  const copyToClipboard = colour => {
    if (!!colour) {
      navigator.clipboard.writeText(colour);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
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
          {copySuccess === false ?
            <>
              <TileWrapper>
                <ButtonWrapper onClick={() => copyToClipboard(randomColour ? randomColour[0].hex : null)}>
                  <Tile colour={randomColour ? randomColour[0].hex : ''} />
                </ButtonWrapper>
                <ButtonWrapper onClick={() => copyToClipboard(randomColour ? randomColour[1].hex : null)}>
                  <Tile colour={randomColour ? randomColour[1].hex : ''} />
                </ButtonWrapper>
              </TileWrapper>
              <ButtonWrapperCenter onClick={() => generateColours()}>
                <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} text="Generate Colours" />
              </ButtonWrapperCenter>
              <ButtonWrapperCenter whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => saveColour(randomColour ? randomColour : '')}>
                <StyledSaveIcon />
              </ButtonWrapperCenter>
              {isEmpty &&
                <ErrorText>You can't save an empty set</ErrorText>
              }
              {isDuplicate &&
                <ErrorText>You already have that set saved</ErrorText>
              }
            </>
            : <CopyText animate={{ scale: 2 }} transition={{ duration: 0.2 }}>Copied!</CopyText>}
        </ContentContainer>
        <ButtonWrapperRight whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} playAnimation={playAnimation} onClick={toggleDrawer}>
          {!isDrawerOpen ?
            <StyledLeftIcon /> : <StyledRightIcon />
          }
        </ButtonWrapperRight>
        <SideBarContainer>
          <Drawer
            showFavorite={showFavorite}
            clearFavorites={clearFavorites}
            deleteFavorite={deleteFavorite}
            contents={savedColours}
            isDrawerOpen={isDrawerOpen} />
        </SideBarContainer>
      </AppContainer>
    </Background>
  );
}

export default App;
