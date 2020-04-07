import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 2em;
  padding: 5px;
  color: white;
  background: none;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = props => {
  return (
    <StyledButton>{props.text}</StyledButton>
  )
}