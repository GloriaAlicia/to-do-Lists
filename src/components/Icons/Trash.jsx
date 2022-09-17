import { FiTrash } from "react-icons/fi";
import styled from 'styled-components'
import { colors } from "../../styles/var";


export const Trash = styled(FiTrash)`
  height: 14px;
  color: ${colors.primary};
  &:hover{
		color: ${colors.gRose};
	}
`