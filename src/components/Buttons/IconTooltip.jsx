import styled from 'styled-components'
import { colors, space } from '../../styles/var';

const Button = styled.button`
  color: ${colors.white};
  border: solid 1px ${colors.primary};
  border-radius: ${space.radius};
  position: relative;
  display: inline-block;

	&:hover{
    box-shadow: 0px 20px 35px ${colors.primaryOpacity};
    border: solid 1px ${colors.white};
	}
`;

const Tooltip = styled.span`
  color: ${colors.white};
  background-color: ${colors.background};
  font-size: 0.8rem;
  visibility: hidden;
  min-width: 2em;
  text-align: center;
  border-radius: ${space.radius};
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: -50%;
  right: 10%;

&::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: ${colors.background} transparent transparent transparent;
}

${Button}:hover && {
 visibility: visible;
}
`
export const IconTooltip = ({ title, children, handle }) => {
	return (
    <Button onClick={handle}  aria-label={ `button for ${title}` } >
      { children }
      <Tooltip> {title} </Tooltip>
    </Button>
	)
}