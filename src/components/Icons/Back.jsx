import { FiArrowLeft } from 'react-icons/fi'
import styled from 'styled-components'
import { colors } from '../../styles/var'


export const Back = styled(FiArrowLeft)`
  height: 14px;
	color: ${colors.primary};
  &:hover{
		color: ${colors.white};
	}
`