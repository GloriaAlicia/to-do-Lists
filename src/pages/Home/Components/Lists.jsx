import { useLists } from '../../../hooks/useLists.jsx'
import { at, lay } from '../../../components/index.js'

export const Lists = () => {
	const { lists} = useLists()

	return (
		<section>			
			<at.GridContainer>
				
				{lists.map((list) => (
					<at.GradientBackground key={list.id}>
						<lay.ItemList
							list={list}
							title={list.name}
							id={list.id}
						/>
					</at.GradientBackground>
				))}
				
			</at.GridContainer>
		</section>
	)
}
