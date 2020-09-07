import React from 'react';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri';
import theme from '../../styles/theme';

const { colors } = theme;

const StyledPrevArrow = styled.button`
  position: absolute;
  background: ${colors.transparentBlack};
  border: 2px solid ${colors.transparentWhite};
  border-radius: 5px;
  color: ${colors.white};
  left: -1rem;
  top: 40%;
  height: 100px;
  padding: 0;
  z-index: 1;
`;

function PrevArrow({ className, style, onClick }) {
  return (
    <StyledPrevArrow
      className={'slick-arrow'}
      onClick={onClick}
      style={{ ...style }}
    >
      <RiArrowLeftSLine size={50} />
    </StyledPrevArrow>
  );
}

export default PrevArrow;
