import * as At from '../Atoms';
import * as Button from '../Buttons';

export const Form = ({ submit, onChange, values, buttonText }) => {
  return (
    <form onSubmit={submit} style={{ display: 'flex' }}>
      {values.map((input) => {
        return (
          <div key={input.name}>
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
          </div>
        );
      })}

      {buttonText ? (
        <Button.Primary type="submit" onClick={submit}>
          {buttonText}
        </Button.Primary>
      ) : undefined}
    </form>
  );
};
