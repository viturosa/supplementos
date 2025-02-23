import IMGLogo from './carticon.png'
import { useState } from 'react'

export function CartWidget() {

	const qtStock = 12

	const [cartCount, setCartCount] = useState(0)
	const updateCart = () => {
		setCartCount(prevCont => prevCont + 1)
	}
	return (
		<div>
			<img src={IMGLogo}/>
			<span>{cartCount}</span>

			<button onClick={updateCart}>Adicionar Item</button>
		</div>
	)
}
