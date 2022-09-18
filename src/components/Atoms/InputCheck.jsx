import styled from 'styled-components'
import { colors } from '../../styles/var';

export const InputCheck = styled.input.attrs({ type: "checkbox" })`
  height: 1.5rem;
  min-width: 1.5rem;
  margin: 5px;
  display: inline-block;
  appearance: none;
  position: relative;
  border-radius: 50%;
  padding: 10px;
  border: solid 1.2px ${colors.primary};
  cursor: pointer;
  overflow: hidden;

&:checked{
  border: transparent;
}

&::after {
  content: '';
  display: block;
  height: 0.75rem;
  width: .3rem;
  border-bottom: .2rem solid ${colors.primary};
  border-right: .2rem solid ${colors.primary};
  opacity: 0;
  transform: rotate(45deg) translate(-50%, -50%);
  position: absolute;
  top: 48%;
  left: 20%;
  transition: .3s ease;
}

&:checked::after {
 opacity: 100%;
}

&::before {
 content: '';
 display: block;
 height: 0;
 width: 0;
 background-color: transparent;
 border-radius: 50%;
 opacity: .5;
 transform: translate(-50%, -50%);
 position: absolute;
 top: 50%;
 left: 50%;
 transition: .3s ease;
}

&:checked::before {
 height: 130%;
 width: 130%;
 opacity: 100%;
}

&:focus{
  outline: solid 2px #00c8967e;
}
`;