import styled from 'styled-components';
import { space } from '../../styles/var';

export const GridContainer = styled.section`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2vw;
  margin: 0px;

  @media (min-width: 300px) {
    padding: ${space.pad};
    margin: 10px;
  }

  @media (min-width: 700px) {
    padding: ${space.mediumPad};
  }
`;
