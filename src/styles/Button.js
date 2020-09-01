import styled from 'styyled-components';
import theme from './theme';

const { colors } = theme;

export const Button = styled.button`
  background: ${colors.teal};
  color: white;
  font-size: 1em;
  padding: 12px 20px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background: ${colors.lightTeal};
    cursor: pointer;
  }
`;
