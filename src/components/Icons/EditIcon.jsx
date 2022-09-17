import { FiEdit3 } from 'react-icons/fi'
import styled from 'styled-components'
import { colors } from '../../styles/var'


export const EditIcon = styled(FiEdit3)`
  height: 14px;
	color: ${colors.primary};
  &:hover{
		color: ${colors.white};
	}
`