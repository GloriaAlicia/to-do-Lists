import styled from 'styled-components'
import { colors } from '../../styles/var'

export const LabelText = styled.label`
  margin-right: 0.5rem;
  ${(props) => {
    switch (props.check) {
      case true:
        return `
          color: grey;
          text-decoration: line-through;
	        opacity: 0.8;
          }
        `;
      default:
        return `
          color: ${colors.primary};
        `;
    }
  }}
`;