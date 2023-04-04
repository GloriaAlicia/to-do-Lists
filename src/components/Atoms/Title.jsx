import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.8rem;
  white-space: ${({ $wrap }) => ($wrap ? 'nowrap' : 'normal')};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  text-transform: capitalize;
  margin: 0px;
`;
