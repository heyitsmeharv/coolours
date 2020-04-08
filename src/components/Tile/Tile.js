import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 50vh;
  height: 50vh;
  margin: 25px;
  border: white dashed 5px;
  background: ${props => props.colour};
`;

export const TileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.span`
  font-size: 5vh;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const SavedItem = styled.div`
  width: 5vh;
  height: 5vh;
  margin: 10px;
  border: white dashed 2px;
  background: ${props => props.colour};
`;

export const SavedTile = props => {
  return <SavedItem colour={props.colour} />
}

export const Tile = props => {
  return (
    <StyledTile colour={props.colour}>
      <Value>{props.colour}</Value>
    </StyledTile>
  )
}
