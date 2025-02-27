import { Categories } from "../../components/Categories";
import { useCounter } from "../../context/CounterContext";
export function Home() {

	const { count, increment } = useCounter()

	return (
		<>
			<Categories />

			<button onClick={increment}> Contador {count}</button>
		</>
	)
}
