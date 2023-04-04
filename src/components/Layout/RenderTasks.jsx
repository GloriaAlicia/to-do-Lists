import { ItemTask } from '../../pages/board/Components/ItemTask';
import styled from 'styled-components';
import { space, colors } from '../../styles/var';
import { At } from '..';

const Container = styled(At.FlexContainer)`
  padding: ${space.pad};
  border-radius: ${space.radius};
  margin: ${space.pad} 0;
  background-color: ${colors.primaryOpacity};

  @media (max-width: 330px) {
    flex-direction: ${({ big }) => (big ? 'column' : 'row')};
  }
`;

export const RenderTasks = ({ tasks, title }) => {
  return (
    <article>
      {tasks?.length > 0 ? <p> {title} </p> : undefined}

      {tasks?.map((task) => (
        <Container key={task.id} space big={task.task.length >= 18}>
          <ItemTask task={task.task} complete={task.complete} id={task.id} />
        </Container>
      ))}
    </article>
  );
};
