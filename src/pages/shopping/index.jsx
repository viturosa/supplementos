import ItemCount from "../../components/ItemCount";
import { useEffect } from 'react'
import { CategoriesPreview } from './components/CategoriesPreview'
export function Shopping() {

	const [categories, setCategories] = useState({})
	useEffect(() => {
		const getCategories = async () => {
			const category = await getCategoriesCollection
			setCategories(category)
		}

		getCategories()
	}, [])

	return (
		<>
	<div>
	<div><h2>Shopping</h2></div>
	</div>
	<div>
		{
			Object.keys(categories).map(title => {
				return <CategoriesPreview key={title} title={title} />
			})
		}
	</div>


			<ItemCount />


		</>
	)
}
