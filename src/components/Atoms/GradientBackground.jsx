import styled from 'styled-components';
import { randomGradient } from '../../helpers/randomGradient';
import { colors, space } from '../../styles/var';

export const GradientBackground = styled.article`
  padding: ${space.bigPad};
  border-radius: ${space.radius};
  background-image: ${({ gradient }) =>
    gradient
      ? randomGradient(colors.gPurpleOpacity, colors.gPurple)
      : 'transparent'};
  background-repeat: no-repeat;
  background-color: ${colors.primaryOpacity};
  overflow: hidden;

  &:hover {
    box-shadow: 0px 20px 35px ${colors.dark};
  }
`;
