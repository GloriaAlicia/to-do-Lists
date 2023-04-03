import styled from 'styled-components';
import { At, Lay } from '../../../components';
import { createList, validText } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';
import { useLists } from '../../../hooks/useLists';

const Title = styled(At.Title)`
  margin-bottom: 20px;
`;

export const CreateList = () => {
  const { dispatch } = useLists();

  const [values, handleInputChange, reset] = useForm({
    list: '',
    description: '',
  });

  const valuesList = [
    {
      name: 'list',
      label: 'Name',
      placeholder: 'Write here a name',
      value: values.list,
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'Write a description for your list',
      value: values.description,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validText(values.list) && validText(values.description)) {
      dispatch(
        createList({
          name: values.list,
          description: values.description,
        })
      );
    } else {
      console.log('text empty');
    }
    reset();
  };

  return (
    <At.Modal textButton={'Create new list'}>
      <Title>Create new list</Title>
      <Lay.Form
        submit={handleSubmit}
        onChange={handleInputChange}
        values={valuesList}
        buttonText="create"
      />
    </At.Modal>
  );
};
