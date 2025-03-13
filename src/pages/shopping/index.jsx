
import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from './components/CategoriesPreview'
import { CategoryShop } from '../../components/CategoryShop'

export function Shopping() {

	return (

		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<CategoryShop />} />
		</Routes>
	)
}
