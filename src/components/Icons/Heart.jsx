import { FiHeart } from "react-icons/fi";
import styled from 'styled-components'
import { colors } from "../../styles/var";

const Icon = styled(FiHeart)`
  height: 14px;
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
      <Icon $check={favourite === true} />
    </label>
  )
}