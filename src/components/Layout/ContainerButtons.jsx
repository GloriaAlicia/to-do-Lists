import { deleteList, pickList } from "../../helpers/create"
import { useLists } from "../../hooks/useLists"
import * as button from '../Buttons'
import * as icon from '../Icons'
import * as at from '../Atoms'


export const ContainerButtons = ({id}) => {
  const { lists, dispatch } = useLists()
  
  const handleDeleteList = () => {
    dispatch(deleteList(id))
    console.log(deleteList(id));
  }
  
  return (
    <at.FlexContainer space>
      <button.Primary onClick={() => dispatch(pickList(id))}>
				Add subtasks
      </button.Primary>
      
      <at.FlexContainer>
        <button.IconTooltip title={'delete'} handle={handleDeleteList} >
        <icon.Trash />
      </button.IconTooltip>
      
      </at.FlexContainer>
    </at.FlexContainer>
)
}