import styled from 'styled-components';
import { colors, space } from '../../styles/var';

const Decorative = styled.h1`
  background-image: radial-gradient(
      farthest-side at 20% 100%,
      ${colors.primary} 0%,
      transparent 100%
    ),
    radial-gradient(
      farthest-side at 100% 30%,
      ${colors.gPurple} 0%,
      transparent 90%
    );
  font-size: 5rem;
  font-style: italic;
  margin: 0.5rem 0 0 0;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.h4`
  font-size: 2rem;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Container = styled.header`
  padding: ${space.bigPad} 0px ${space.bigPad} ${space.bigPad};
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  user-select: none;
`;
const Image = styled.img`
  display: block;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const TitleDecorative = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <Decorative>Tasker </Decorative>
        <Image src={'/Logo.svg'} alt="logo image" />
      </Wrapper>
      <Text> {text} </Text>
    </Container>
  );
};
