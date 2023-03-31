import { CreateTask } from './Components/CreateTask';
import { pickList } from '../../helpers/create';
import { useLists } from '../../hooks/useLists';
import { At, Button, Lay, Icon } from '../../components/index.js';
import styled from 'styled-components';

const Container = styled(At.FlexContainer)`
  width: 90vw;
  margin: 0 auto;
  flex-direction: column;
`;

const WrapperCreate = styled(At.FlexContainer)`
  width: 80%;
`;

export const Board = () => {
  const { dispatch } = useLists();

  return (
    <Container>
      <Lay.Header />

      <WrapperCreate>
        <Button.Primary onClick={() => dispatch(pickList(10))}>
          <Icon.Back />
        </Button.Primary>

        <CreateTask />
      </WrapperCreate>

      <Lay.ContainerTasks />
    </Container>
  );
};
