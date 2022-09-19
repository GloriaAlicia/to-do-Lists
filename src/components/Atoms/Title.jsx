import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 1.8rem;
  overflow: hidden; 
  white-space: ${({$wrap}) => $wrap ? 'wrap' : 'nowrap'};
  text-overflow: ellipsis; 
  text-transform: capitalize;
`;