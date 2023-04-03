import { useLists } from '../../../hooks/useLists.jsx';
import { At, Lay } from '../../../components/index.js';
import { ItemList } from './ItemList';
import { Fragment } from 'react';

export const Lists = () => {
  const { lists } = useLists();

  return (
    <>
      {lists.length !== 0 ? (
        <At.GridContainer>
          {lists.map((list) => (
            <Fragment key={list.id}>
              <ItemList list={list} />
            </Fragment>
          ))}
        </At.GridContainer>
      ) : (
        <Lay.Empty text="No lists yet" />
      )}
    </>
  );
};
