
import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from './components/CategoriesPreview'
export function Shopping() {


	return (

		<Routes>
			<Route index element={<CategoriesPreview />} />
		</Routes>
	)
}
