import styled from 'styled-components'
import { colors, space } from '../../styles/var'

export const InputText = styled.input.attrs({ type: "text" })`
  border: solid 1px ${colors.primary};
  border-radius: ${space.radius};
  background: transparent;
  color: ${colors.primary};
  padding: 0.25em;
  transition: all .6s ease-in;

&::placeholder{
  color: ${colors.primaryOpacity};
}

&:focus{
  outline: 2px solid ${colors.primary};
}
`;