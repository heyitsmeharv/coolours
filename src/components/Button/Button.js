import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  font-size: 42px;
  font-weight: 200;
  line-height: 60px;
  color: ${props => props.textColor};
  background: none;
  outline: none !important;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const StyledNavButton = styled(motion.button)`
  font-size: 1.5rem;
  color: ${props => props.textColor};
  background: none;
  outline: none !important;
  border: none;
  margin: 0 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.textColor};
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${props => props.textColor};
    text-decoration: none;
  }
`;
