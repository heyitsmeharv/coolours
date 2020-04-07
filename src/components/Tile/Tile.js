import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 50vh;
  height: 50vh;
  margin: 25px;
  border: white dashed 5px;
  background: ${props => props.colour};
`

export const TileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tile = props => {
  return (
    <StyledTile colour={props.colour} />
  )
}
