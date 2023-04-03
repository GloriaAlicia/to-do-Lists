import { updateTask } from '../../../helpers/create';
import { Lay } from '../../../components';
import { useLists } from '../../../hooks/useLists';

export const TaskEdit = ({ searchId, setEdit, task }) => {
  const { dispatch } = useLists();

  const handleSubmit = (state) => {
    dispatch(updateTask(state, searchId));
    setEdit(false);
  };

  return (
    <Lay.Form
      submit={handleSubmit}
      textValue={task}
      buttonText={'Update'}
      onChange={handleInputChange}
      values={valuesList}
    />
  );
};
