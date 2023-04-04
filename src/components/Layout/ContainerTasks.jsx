import { useFindList } from '../../hooks/useFindList';
import { useStatus } from '../../hooks/useStatus';
import { RenderTasks } from './RenderTasks';
import styled from 'styled-components';
import { Empty } from './Empty';

export const Container = styled.section`
  margin: 0 auto;
  width: 80%;

  @media (max-width: 390px) {
    width: 100%;
  }
`;
export const ContainerTasks = () => {
  const actualList = useFindList();
  const { status: tasksProgress } = useStatus(
    actualList?.tasks,
    'complete',
    'progress'
  );

  const { status: tasksCompleted } = useStatus(
    actualList?.tasks,
    'complete',
    'completed'
  );

  return (
    <>
      {actualList.tasks.length !== 0 ? (
        <Container>
          <RenderTasks tasks={tasksProgress} title={'In progress'} />
          <RenderTasks tasks={tasksCompleted} title={'Completed'} />
        </Container>
      ) : (
        <Empty text="No tasks yet" />
      )}
    </>
  );
};
