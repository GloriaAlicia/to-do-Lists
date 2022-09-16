import styled from 'styled-components'
import { randomGradient } from '../../helpers/randomGradient';
import { colors, space } from '../../styles/var';

export const GradientBackground = styled.article`
	padding: ${space.pad};
	border-radius: ${space.radius};
	background-image: ${randomGradient(colors.gPurpleOpacity, colors.gPurple, colors.gRose)};
	background-repeat: no-repeat;
	background-color: ${colors.primaryOpacity};

	&:hover{
    box-shadow: 0px 20px 35px ${colors.dark};
	}
`;