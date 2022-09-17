import styled from 'styled-components'
import { colors, space } from '../../styles/var';

export const Primary = styled.button`
  color: inherit;
  background-color: ${colors.primaryOpacity};
  border-radius: ${space.radius};
  display: inline-block;

	&:hover{
    box-shadow: 0px 20px 35px ${colors.primaryOpacity};
	}
`;