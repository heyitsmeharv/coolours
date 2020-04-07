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

export const Value = styled.span`
  font-size: 5vh;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
`

export const Tile = props => {
  // const [isHoverActive, setHoverActive] = useState(false);

  return (
    <StyledTile colour={props.colour}>
      <Value>{props.colour}</Value>
    </StyledTile>
  )
}
