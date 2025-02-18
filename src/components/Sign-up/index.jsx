import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'
const defaultFormFilds = {
	name: '',
	email: '',
	password: '',
	confirmePassword: ''
}
export function SignUp() {
	const [formFilds, setFormFilds] = useState(defaultFormFilds)
	const { name, email, password, confirmePassword } = formFilds
	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFilds({ ...formFilds, [name]: value })
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		if (password !== confirmePassword) {
			toast.warn('Senha não são iguais!')
			return
		}
		console.log(formFilds)
		setFormFilds(defaultFormFilds)
	}
	return (
		<>
			<h2>Não possui conta?</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}
					className="input-custom"
				/>
				<input
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}
					className="input-custom"
				/>
				<input
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}
					className="input-custom"
				/>
				<input
					type="password"
					placeholder="Confirme sua senha"
					value={confirmePassword}
					name="confirmePassword"
					className="input-custom"
					onChange={handleChange}
				/>
				<button type="submit">Criar Conta</button>
			</form>
		</>
	)
}
