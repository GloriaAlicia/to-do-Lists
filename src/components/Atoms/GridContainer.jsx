import styled from 'styled-components'
import { space } from '../../styles/var';

export const GridContainer = styled.section`
	padding: ${space.mediumPad};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 2vw;

@media (max-width: 280px) {
	  padding: ${space.pad};
  }
`;