import React from 'react';
import styled from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';
import theme from '../../styles/theme';

const { colors } = theme;

const StyledNextArrow = styled.button`
  position: absolute;
  background: ${colors.transparentBlack};
  border: 2px solid ${colors.transparentWhite};
  border-radius: 5px;
  color: ${colors.white};
  right: -1rem;
  top: 40%;
  height: 100px;
  padding: 0;
  z-index: 1;
`;

function NextArrow({ className, style, onClick }) {
  return (
    <StyledNextArrow
      className={'slick-arrow'}
      onClick={onClick}
      style={{ ...style }}
    >
      <RiArrowRightSLine size={50} />
    </StyledNextArrow>
  );
}

export default NextArrow;
