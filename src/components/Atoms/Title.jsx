import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2.2rem;
  white-space: ${({ $wrap }) => ($wrap ? 'nowrap' : 'normal')};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  text-transform: capitalize;
  margin: 0px;

  @media (max-width: 390px) {
    font-size: 1.8rem;
  }
`;
