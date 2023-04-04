import { updateTask } from '../../../helpers/create';
import { Lay } from '../../../components';
import { useLists } from '../../../hooks/useLists';
import { useForm } from '../../../hooks';
import { validText } from '../../../helpers';

export const TaskEdit = ({ searchId, setEdit, task }) => {
  const { dispatch } = useLists();

  const [values, handleInputChange, reset] = useForm({
    task: task,
  });

  const valuesList = [
    {
      name: 'task',
      placeholder: 'new subtask',
      value: values.task,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validText(values.task)) {
      dispatch(updateTask(values.task, searchId));
      setEdit(false);
    } else {
      console.log('text empty');
    }
    reset();
  };

  return (
    <Lay.Form
      submit={handleSubmit}
      textValue={task}
      // buttonText={'Update'}
      onChange={handleInputChange}
      values={valuesList}
    />
  );
};
