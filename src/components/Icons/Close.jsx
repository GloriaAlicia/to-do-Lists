import { FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { colors } from '../../styles/var';

export const Close = styled(FiX)`
  height: 25px;
  width: 25px;
  color: ${colors.primary};
  &:hover {
    color: ${colors.white};
  }
`;
