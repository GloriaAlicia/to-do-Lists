import styled from 'styled-components';
import { At, Lay } from '../../../components';
import { createList, validText } from '../../../helpers';
import { useDisclosure } from '../../../hooks';
import { useForm } from '../../../hooks/useForm';
import { useLists } from '../../../hooks/useLists';

const Title = styled(At.Title)`
  margin-bottom: 20px;
  width: 90%;
`;

export const CreateList = () => {
  const { dispatch } = useLists();
  const { close, value, toggle } = useDisclosure();

  const [values, handleInputChange, reset] = useForm({
    list: '',
    description: '',
  });

  const valuesList = [
    {
      name: 'list',
      label: 'Name*',
      placeholder: 'Write a name here',
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
    if (validText(values.list)) {
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
    close();
  };

  return (
    <At.Modal
      textButton={'Create new list'}
      value={value}
      toggle={toggle}
      close={close}
    >
      <Title $wrap>Create new list</Title>
      <Lay.Form
        submit={handleSubmit}
        onChange={handleInputChange}
        values={valuesList}
        buttonText="Create"
      />
    </At.Modal>
  );
};
