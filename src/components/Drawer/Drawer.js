import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Button, ButtonWrapperCenter } from '../../components/Button/Button';
import { SavedTile } from '../../components/Tile/Tile';

import { DeleteBack } from '@styled-icons/remix-fill/DeleteBack';

const DrawContainer = styled.div`
  ${props => props.shouldStyle && css`
    height: 100%;
    width: 200px;
    overflow-y: auto;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    transform: translate(200px);
    box-shadow: 5px 0px 18px rgb(0, 0, 0, 0);
  
    ${props => props.isOpen && css`
      transform: translate(0);
      box-shadow: unset;
      box-shadow: 5px 8px 18px rgb(0, 0, 0, 0.7);
    `}
  `}
`;

const DrawContents = styled.div`
  padding: 4vh;
`;

const SavedList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledIconContainer = styled(motion.div)`
  display: flex;
`;

const StyledDeleteIcon = styled(DeleteBack)`
  color: white;
  width: 30px;
  padding-left: 2px;
`

const Drawer = ({ showFavorite, clearFavorites, deleteFavorite, contents, isDrawerOpen }) => (
  <DrawContainer shouldStyle={isDrawerOpen} isOpen={isDrawerOpen}>
    {isDrawerOpen &&
      <DrawContents>
        <ButtonWrapperCenter whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={clearFavorites}>
          <Button small border text="Clear Favorites" />
        </ButtonWrapperCenter>
        <SavedList>
          {contents.map((tile, index) => (
            <ListItem key={index} onClick={() => showFavorite(tile)}>
              <SavedTile
                index={index}
                colour={tile[0].hex}
              />
              <SavedTile
                index={index}
                colour={tile[1].hex}
              />
              <StyledIconContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <StyledDeleteIcon onClick={() => deleteFavorite(index)} />
              </StyledIconContainer>
            </ListItem>
          ))}
        </SavedList>
      </DrawContents>
    }
  </DrawContainer>
);

export default Drawer;