import styled from 'styled-components';
import { At, Lay } from '../../../components/index.js';

const Description = styled.p`
  font-size: 0.8rem;
  margin: 0px 0px 1.2rem 0px;
  opacity: 0.6;
  width: 270px;
  height: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ItemList = ({ list }) => {
  const { name, favourite, description, id } = list;
  return (
    <At.GradientBackground gradient={favourite}>
      <At.Title $wrap> {name} </At.Title>
      <Description>{description ? description : '...'}</Description>
      <Lay.ProgressBar list={list} />
      <Lay.ContainerButtons id={id} favourite={favourite} />
    </At.GradientBackground>
  );
};
