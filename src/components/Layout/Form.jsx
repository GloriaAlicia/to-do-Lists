import { Fragment } from 'react';
import styled from 'styled-components';
import { colors, space } from '../../styles/var';
import * as At from '../Atoms';
import * as Button from '../Buttons';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: ${space.pad};
  flex-direction: column;
`;

const SendButton = styled(Button.Primary)`
  padding: ${space.mediumPad};
  background-color: ${colors.accent};
  width: fit-content;
  display: flex;
  align-self: end;
`;

const FormContainer = styled.form`
  display: flex;
  gap: ${space.bigPad};
  flex-direction: column;
`;

export const Form = ({ submit, onChange, values, buttonText }) => {
  return (
    <FormContainer onSubmit={submit}>
      {values.map((input) => {
        return input.label ? (
          <Container key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <At.InputText
              id={input.name}
              name={input.name}
              autoComplete="off"
              maxLength={100}
              value={input.value}
              placeholder={input.placeholder}
              onChange={(e) => onChange(e)}
            />
          </Container>
        ) : (
          <Fragment key={input.name}>
            <At.InputText
              id={input.name}
              name={input.name}
              autoComplete="off"
              maxLength={100}
              value={input.value}
              placeholder={input.placeholder}
              onChange={(e) => onChange(e)}
            />
          </Fragment>
        );
      })}

      {buttonText ? (
        <SendButton type="submit" onClick={submit}>
          {buttonText}
        </SendButton>
      ) : undefined}
    </FormContainer>
  );
};
