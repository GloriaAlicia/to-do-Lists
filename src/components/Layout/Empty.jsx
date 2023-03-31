import styled from 'styled-components';
import { colors, space } from '../../styles/var';

const Container = styled.section`
  width: inherit;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 30px;
  border-radius: ${space.radius};
  border: 1px ${colors.primaryOpacity} dashed;
  user-select: none;
`;
export const Empty = ({ text }) => {
  return (
    <Container>
      <img src="/empty.svg" alt="icon no find lists" />
      <p>{text}</p>
    </Container>
  );
};
