import styled from 'styled-components';
import theme from './theme';

const { colors, fontSizes } = theme;

const Button = styled.button`
  background: ${colors.teal};
  color: ${colors.white};
  font-size: ${fontSizes.md};
  padding: 12px 20px;
  border: 0;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background: ${colors.lightTeal};
    cursor: pointer;
  }
`;

export default Button;
