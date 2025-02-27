import IMGLogo from './carticon.png'
import { useCounter } from '../../context/CounterContext'
import { count } from 'firebase/firestore'

export function CartWidget() {

	const { count } = useCounter()

	}
	return (
		<div>
			<img src={IMGLogo}/>
			<span>{count}</span>

			<button>Adicionar Item</button>
		</div>
	)

