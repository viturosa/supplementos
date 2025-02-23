import * as Style from './style'
import { CartWidget } from '../CartWidget'
import { SupIcon } from '../SupIcon'
import { Link, Outlet } from 'react-router-dom'

export function NavBar() {
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
				<Link to='auth'>LOGIN</Link>
			</Style.NavBar>
			<Outlet />
		</>

	)
}
