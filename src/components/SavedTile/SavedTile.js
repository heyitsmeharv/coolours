import React from 'react';
import styled from 'styled-components';

const SavedItem = styled.div`
  width: 5vh;
  height: 5vh;
  margin: 10px;
  border: white dashed 2px;
  background: ${props => props.colour};
`

const SavedTile = props => {
  console.log('props', props);
  return <SavedItem colour={props.colour} />
}

export default SavedTile;
