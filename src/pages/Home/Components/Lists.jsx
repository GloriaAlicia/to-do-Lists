import { useLists } from '../../../hooks/useLists.jsx'
import { At } from '../../../components/index.js'
import { ItemList } from './ItemList'

export const Lists = () => {
	const { lists} = useLists()

	return (
		<section>			
			<At.GridContainer>
				
				{lists.map((list) => (
					<At.GradientBackground key={list.id} gradient={list.favourite} >
						<ItemList
							list={list}
							title={list.name}
						/>
					</At.GradientBackground>
				))}
				
			</At.GridContainer>
		</section>
	)
}
