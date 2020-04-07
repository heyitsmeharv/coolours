import React from 'react';
import styled, { css } from 'styled-components';

const StyledTile = styled.div`
  width: 200px;
  height: 200px;
  margin: 25px;
  border: white dashed 5px;
`

export const TileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tile = () => {
  return (
    <StyledTile/>
  )
}
