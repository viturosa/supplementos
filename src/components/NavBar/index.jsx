import * as Style from './style'
import { CartWidget } from '../CartWidget'
import { SupIcon } from '../SupIcon'
import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
 import { UserContext } from '../../context/userContext'
 import { singOutAuthUser } from '../../utils/firebase'

export function NavBar() {
	const { currentUser } = useContext(UserContext)
	return (

		<>
			<Style.NavBar>
				<Style.LogoContainer to='/'>
					<h2>SUPPLEMENTOS</h2>
					<SupIcon />
					</Style.LogoContainer>
					<Style.LinksNavBar>
					<Link to="shopping">SHOPPING</Link>
				</Style.LinksNavBar>

				<CartWidget />
				{currentUser ? (
 						<Link onClick={singOutAuthUser}>LOGOUT</Link>
 					) : (
 						<Link to="auth">LOGIN</Link>
 					)}
			</Style.NavBar>
			<Outlet />
		</>

	)
}
