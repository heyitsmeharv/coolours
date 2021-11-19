import React from 'react';
import { NavLink } from "react-router-dom";
import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  font-family: 'Gotham SSm A', sas-serinf;
  font-size: 1.5rem;
  color: #222;
  background: none;
  outline: none !important;
  border: none;
  margin: 0 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const StyledNavButton = styled(motion.button)`
  font-family: 'Gotham SSm A', sans-serif;
  font-size: 1.5rem;
  color: #222;
  background: none;
  outline: none !important;
  border: none;
  margin: 0 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #222;
  text-decoration: none;
  :hover {
    color: #222;
    text-decoration: none;
  }
`;
