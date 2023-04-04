import styled from 'styled-components';
import { increaseProgress } from '../../helpers/increaseProgress';
import { useStatus } from '../../hooks';
import { colors, space } from '../../styles/var';

const ContainerWrap = styled.div`
  background-color: rgba(20, 20, 20, 0.26);
  border-radius: ${space.radius};
  height: 1vh;
  width: 100%;
  margin: 0.5rem 0rem;
`;
const ContainerEmpty = styled(ContainerWrap)`
  background-color: rgba(20, 20, 20, 0.1);
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0rem;
`;
const Progress = styled.div`
  border-radius: ${space.radius};
  width: 0%;
  height: 100%;
  background-color: ${colors.accent};
`;
const Text = styled.p`
  margin: 0;
`;

export const ProgressBar = ({ list }) => {
  const { status: complete } = useStatus(list?.tasks, 'complete', 'completed');
  const width = increaseProgress(list.tasks.length, complete.length);

  return list.tasks.length >= 1 ? (
    <>
      <Container>
        <Text> Progress </Text>
        <Text>{`${complete.length} / ${list.tasks.length}`}</Text>
      </Container>

      <ContainerWrap>
        <Progress style={{ width: width + '%' }} />
      </ContainerWrap>
    </>
  ) : (
    <>
      <Container>
        <Text>List empty</Text>
      </Container>
      <ContainerEmpty />
    </>
  );
};
