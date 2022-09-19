import styled from 'styled-components'
import { colors, space } from '../../styles/var'

const Decorative = styled.h1`
  background-image: radial-gradient(farthest-side at 23% 40%,${colors.primary} 0%,transparent 100%), radial-gradient(farthest-side at  20% 90%, ${colors.gPurple} 0%,transparent 90%);
  font-size: 5rem;
  font-style: italic;
  margin: .5rem 0 0 0;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.h4`
  font-size: 2rem;
	margin: 0;
`

const Container = styled.div`
  padding: ${space.bigPad} 0px ${space.bigPad}  ${space.bigPad};
`

export const TitleDecorative = ({text}) => {
  return (
    <Container>
      <Decorative>Tasker  App</Decorative>
			<Text> {text} </Text>
    </Container>
  )
}