
import { useContext } from 'react'
import './style.css'
import { CartContext } from '../../context/cartContext'

export function CartWidget() {

	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
	return (
		<div className="cart-icon-container" onClick={toogleIsCartOpen}>
			<img className="shopping-icon" src={ShoppingIcon} width={30} />
			<span className="item-count">{cartCount}</span>
		</div>
	)
}


