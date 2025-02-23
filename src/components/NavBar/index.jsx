import * as Style from './style'
import { CartWidget } from '../CartWidget'
import { SupIcon } from '../SupIcon'

export function NavBar() {
	return (

		<>
			<Style.NavBar>
				<Style.LinksNavBar>
					<a>SUPPLEMENTOS</a>
					<SupIcon />
					<a>whey</a>
					<a>vitaminas</a>
					<a>creatinas</a>
				</Style.LinksNavBar>

				<CartWidget />
				<a>LOGIN</a>
			</Style.NavBar>
		</>

	)
}
