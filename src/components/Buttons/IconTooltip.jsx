import styled from 'styled-components'
import { colors, space } from '../../styles/var';

export const Button = styled.button`
  // font-size: 1.3rem;
  background-color: ${colors.dark}
  position: relative;
  display: inline-block;

	&:hover{
    box-shadow: 0px 20px 35px ${colors.dark};
	}
`;

const Tooltip = styled.span`
 visibility: hidden;
 width: 4em;
 background-color: ${colors.background};
 text-align: center;
 border-radius: ${space.radius};
 padding: 5px 0;
 position: absolute;
 z-index: 1;
 top: 25%;
 left: 110%;

&::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent ${colors.background} transparent transparent;
}

${Button}:hover + && {
 visibility: visible;
}
`
export const IconTooltip = ({title,}) => {
	return (
		<>
		</>
	)
}