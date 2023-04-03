import { useState } from 'react';
import styled from 'styled-components';
import { colors, space } from '../../styles/var';
import { Primary } from '../Buttons';
import { Plus } from '../Icons/Plus';

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
  background-color: ${colors.background};
  box-shadow: -14px 14px 43px ${colors.dark};
  border-radius: ${space.radius};
  width: 70vw;
  padding: 3vw;
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

export const Modal = ({ children, textButton }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LayerBackground open={open}>
        <Content>{children}</Content>
      </LayerBackground>
      <Button onClick={() => setOpen((state) => !state)}>
        <Plus /> {textButton}
      </Button>
    </>
  );
};
