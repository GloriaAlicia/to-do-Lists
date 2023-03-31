import { useFindList } from '../../hooks/useFindList';
import { useTaskState } from '../../hooks/useTaskState';
import { RenderTasks } from '../../pages/board/Components/RenderTasks';
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
  const { tasksProgress, tasksCompleted } = useTaskState(actualList?.tasks);

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
