import { createContext, useContext, useState } from 'react'

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
	const [count, setCount] = useState(0)

	const increment = () => setCount((prev) => prev + 1)

	return (
		<CounterContext.Provider value={{ count, increment }}>
			{children}
		</CounterContext.Provider>
	)
}

export const useCounter = () => useContext(CounterContext)
