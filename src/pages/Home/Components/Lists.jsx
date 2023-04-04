import { useLists } from '../../../hooks/useLists.jsx';
import { At, Lay } from '../../../components/index.js';
import { ItemList } from './ItemList';
import { Fragment } from 'react';
import { useStatus } from '../../../hooks/useStatus.jsx';
import styled from 'styled-components';
import { space } from '../../../styles/var.js';

const Title = styled.p`
  margin: 10px 0px 0px 15px;

  @media (min-width: 300px) {
    padding-left: ${space.pad};
  }
`;
const RenderLists = ({ lists, title }) => {
  return (
    <>
      <Title>{lists?.length > 0 ? title : undefined}</Title>
      <At.GridContainer>
        {lists.map((list) => (
          <Fragment key={list.id}>
            <ItemList list={list} />
          </Fragment>
        ))}
      </At.GridContainer>
    </>
  );
};

export const Lists = () => {
  const { lists } = useLists();
  const { status: favorite } = useStatus(lists, 'favourite', true);
  const { status: normal } = useStatus(lists, 'favourite', false);

  return (
    <>
      {lists.length !== 0 ? (
        <>
          <RenderLists lists={favorite} title={'favorite lists'} />
          <RenderLists lists={normal} title={'other lists'} />
        </>
      ) : (
        <Lay.Empty text="No lists yet" />
      )}
    </>
  );
};
