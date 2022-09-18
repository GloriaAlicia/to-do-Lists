import styled from 'styled-components'
import { space } from '../../styles/var'

export const FlexContainer = styled.article`
  display: flex;
	align-items: center;
  gap: ${space.pad};
  justify-content: ${({space}) => space ? 'space-between;' : 'flex-start'};
`