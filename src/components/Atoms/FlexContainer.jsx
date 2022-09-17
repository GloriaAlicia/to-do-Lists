import styled from 'styled-components'

export const FlexContainer = styled.article`
  display: flex;
	align-items: center;
  justify-content: ${({space}) => space ? 'space-between;' : 'flex-start'};
`