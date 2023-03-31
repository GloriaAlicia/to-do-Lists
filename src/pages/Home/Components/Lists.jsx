import { useLists } from '../../../hooks/useLists.jsx';
import { At, Lay } from '../../../components/index.js';
import { ItemList } from './ItemList';

export const Lists = () => {
  const { lists } = useLists();

  return (
    <>
      {lists.length !== 0 ? (
        <At.GridContainer>
          {lists.map((list) => (
            <At.GradientBackground key={list.id} gradient={list.favourite}>
              <ItemList list={list} title={list.name} />
            </At.GradientBackground>
          ))}
        </At.GridContainer>
      ) : (
        <Lay.Empty text="No lists yet" />
      )}
    </>
  );
};
