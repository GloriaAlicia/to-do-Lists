import { FiHeart } from "react-icons/fi";
import styled from 'styled-components'
import { colors } from "../../styles/var";

const Icon = styled(FiHeart)`
  height: 100%;
  width: 100%;
  padding: 11px;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  &:hover{
		color: ${colors.white};
	}

  ${(props) => {
    switch (props.$check) {
      case true:
        return `
          color: ${colors.white};
          fill: ${colors.white};
          }
        `;
      default:
        return `
          color: ${colors.primary};
        `;
    }
  }}
`
export const Heart = ({ id, favourite }) => {
  return (
    <label htmlFor={id}>
      <Icon $check={favourite} />
    </label>
  )
}