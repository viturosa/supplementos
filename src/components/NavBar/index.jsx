import * as Style from './style'
import IMGLogo from './logo-ecom.webp'

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
				<a>LOGIN</a>
			</Style.NavBar>
		</>

	)
}
