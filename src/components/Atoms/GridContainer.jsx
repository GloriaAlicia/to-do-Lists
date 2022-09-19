import styled from 'styled-components'
import { space } from '../../styles/var';

export const GridContainer = styled.section`
	padding: ${space.mediumPad};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2vw;

@media (max-width: 250px) {
	  padding: ${space.pad};
  }
`;