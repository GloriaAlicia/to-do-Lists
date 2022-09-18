import styled from 'styled-components'
import { favouriteList } from '../../helpers/create'
import { useLists } from '../../hooks/useLists'
import * as Icon from '../Icons'

const Check = styled.input.attrs({ type: "checkbox" })`
  display: none;
`
export const Favourite = ({id, favourite}) => {
  const { dispatch } = useLists()
  
  const handleChange = ({ target }) => dispatch(favouriteList(target.checked, id));
  
  return (
    <>
      <Check
        id={id}
				defaultChecked={favourite === true ?? checked}
        onChange={handleChange}
      />
      
      <Icon.Heart id={id} favourite={favourite} />
    </>
  )
}