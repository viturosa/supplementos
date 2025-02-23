import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'
import './style.css'

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
		<div className='sign-up-container'>
			<h2>Não possui conta?</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}

				/>
				<FormInput
					label="Email"
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}

				/>
				<FormInput
					label="Senha"
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}

				/>
				<FormInput
					label="Confirme sua Senha"
					type="password"
					placeholder="Confirme sua senha"
					value={confirmePassword}
					name="confirmePassword"
					onChange={handleChange}
				/>

				<button type="submit">Criar Conta</button>
			</form>
			</div>
		</>
	)
}
