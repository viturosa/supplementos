
import { NavBar } from './components/NavBar'
import { Categories } from './components/Categories'
import { Auth } from './pages/auth'
import { ItemListContainer } from './components/ItemListContainer'

export function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer />
			<Auth />
			{/* <Categories /> */}
		</>
	)
}

