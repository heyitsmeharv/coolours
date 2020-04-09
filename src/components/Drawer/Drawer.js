import React from 'react';
import styled, { css } from 'styled-components';

import { Button, ButtonWrapperCenter } from '../../components/Button/Button';
import { SavedTile } from '../../components/Tile/Tile';

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

const Drawer = ({ showFavorite, clearFavorites, contents, isDrawerOpen }) => (
  <DrawContainer shouldStyle={isDrawerOpen} isOpen={isDrawerOpen}>
    {isDrawerOpen &&
      <DrawContents>
        <ButtonWrapperCenter onClick={clearFavorites}>
          <Button small border text="Clear Favorites" />
        </ButtonWrapperCenter>
        <SavedList>
          {contents.map((tile, index) => (
            <ListItem onClick={() => showFavorite(tile)}>
              <SavedTile
                key={index}
                index={index}
                colour={tile[0].hex}
              />
              <SavedTile
                key={index}
                index={index}
                colour={tile[1].hex}
              />
            </ListItem>
          ))}
        </SavedList>
      </DrawContents>
    }
  </DrawContainer>
);

export default Drawer;