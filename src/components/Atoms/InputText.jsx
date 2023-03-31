import styled from 'styled-components';
import { colors, space } from '../../styles/var';

export const InputText = styled.input.attrs({ type: 'text' })`
  border: solid 1px ${colors.primary};
  border-radius: ${space.radius};
  background: transparent;
  color: ${colors.white};
  padding: ${space.pad};
  margin: 0px;
  transition: all 0.6s ease-in;

  &::placeholder {
    color: ${colors.primary};
  }

  &:focus {
    outline: 2px solid ${colors.primary};
  }

  @media (max-width: 330px) {
    width: 85%;
  }
`;
