import styled from 'styled-components';
import { colors, space } from '../../styles/var';
import { Primary } from '../Buttons';
import { Close } from '../Icons/Close';

const LayerBackground = styled.article`
  position: fixed;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(26, 26, 26, 0.26);
  z-index: 10;
`;

const Content = styled.div`
  position: fixed;
  background-color: ${colors.semidark};
  box-shadow: -14px 14px 43px ${colors.dark};
  border-radius: ${space.radius};
  width: 70vw;
  padding: ${space.mediumPad};

  @media (min-width: 500px) {
    width: 60vw;
  }

  @media (min-width: 800px) {
    width: 50vw;
    padding: ${space.mega};
  }
`;

const Button = styled(Primary)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 15px;
  background-color: ${colors.accent};
  box-shadow: 30px 14px 43px ${colors.dark},
    14px 14px 43px ${colors.primaryOpacity};
  z-index: 20;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: ${space.radius};
  padding: 3px 5px;

  @media (min-width: 500px) {
    top: ${space.mediumPad};
    right: ${space.mediumPad};
  }
`;

export const Modal = ({ children, value, toggle, close, textButton }) => {
  return (
    <>
      <LayerBackground open={value}>
        <Content>
          <ButtonClose onClick={close}>
            <Close />
          </ButtonClose>
          {children}
        </Content>
      </LayerBackground>
      <Button onClick={toggle}>{textButton}</Button>
    </>
  );
};
