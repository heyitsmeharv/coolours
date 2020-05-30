import React from 'react';
import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  font-size: 2em;
  padding: 5px;
  color: white;
  background: none;
  outline: none!important;
  border: none;
  ${props => props.small && css`
    font-size: 1em;
  `}
  ${props => props.border && css`
    border: 2px solid white;
  `}
  :hover {
    cursor: pointer;
  }
`;

export const ButtonWrapperCenter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapperRight = styled(motion.div)`
  display: flex;

  @keyframes blinker {  
    50% { opacity: 0; }
  }

  ${props => props.playAnimation && css`
    animation: blinker 1s linear;
  `}

`

export const Button = props => {
  return <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} small={props.small} border={props.border}>{props.text}</StyledButton>
}