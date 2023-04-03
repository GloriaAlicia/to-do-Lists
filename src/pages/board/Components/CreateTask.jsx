import { Lay } from '../../../components/';
import { validText, createTask } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';
import { useLists } from '../../../hooks/useLists';

export const CreateTask = () => {
  const { dispatch } = useLists();

  const [values, handleInputChange, reset] = useForm({
    task: '',
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
      dispatch(createTask(values.task));
    } else {
      console.log('text empty');
    }
    reset();
  };
  return (
    <Lay.Form
      submit={handleSubmit}
      onChange={handleInputChange}
      values={valuesList}
    />
  );
};
