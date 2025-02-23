
import { NavBar } from './components/NavBar'
import { Auth } from './pages/auth'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Shopping } from'./pages/shopping'

export function App() {
	return (
		<Routes>
			<Route path='/' element={<NavBar />}>
			<Route index element={<Home />}/>
			<Route path='auth' element={<Auth />} />
			<Route path='shopping' element={<Shopping />} />

			</Route>
		</Routes>
	)
}

