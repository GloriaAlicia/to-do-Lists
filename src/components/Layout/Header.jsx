import styled from 'styled-components';
import { useFindList } from '../../hooks/useFindList';
import { useStatus } from '../../hooks/useStatus';
import { At } from '../../components/index';

const Container = styled(At.FlexContainer)`
  width: 80%;
  padding: 30px 0px 10px 0px;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;
const Text = styled.p`
  margin: 0px;
`;
export const Header = () => {
  const actualList = useFindList();
  const { status } = useStatus(actualList?.tasks, 'complete', 'progress');

  return (
    <Container>
      <At.Title>{actualList?.name}</At.Title>
      <Text> {status?.length ?? 0} remaining tasks </Text>
    </Container>
  );
};
