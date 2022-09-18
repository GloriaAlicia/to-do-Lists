import { deleteList, pickList } from "../../helpers/create"
import { useLists } from "../../hooks/useLists"
import * as Button from '../Buttons'
import * as Icon from '../Icons'
import * as At from '../Atoms'
import * as Lay from '../Layout'


export const ContainerButtons = ({id, favourite}) => {
  const { dispatch } = useLists()
  
  const handleDeleteList = () => dispatch(deleteList(id))
  
  return (
    <At.FlexContainer space>
      <Button.Primary onClick={() => dispatch(pickList(id))}>
				Subtasks
      </Button.Primary>
      
      <At.FlexContainer>
        <Button.IconTooltip title={'delete'} handle={handleDeleteList} >
          <Icon.Trash />
        </Button.IconTooltip>
      
        <Button.IconTooltip title={'favourite'}>
          <Lay.Favourite  id={id} favourite={favourite} />
        </Button.IconTooltip>
        
      </At.FlexContainer>
    </At.FlexContainer>
)
}