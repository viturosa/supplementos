import * as Style from './style'
import IMGLogo from './logo-ecom.webp'
import { CartWidget } from '../CartWidget'

export function NavBar() {
	return (

		<>
			<Style.NavBar>
				<div>
					<img src={IMGLogo}/>
				</div>
				<Style.LinksNavBar>
					<a>HOME</a>
					<a>WHEY</a>
					<a>VITAMINAS</a>
					<a>ACESSÓRIOS</a>
				</Style.LinksNavBar>
				<CartWidget />
				<a>LOGIN</a>
			</Style.NavBar>
		</>

	)
}
