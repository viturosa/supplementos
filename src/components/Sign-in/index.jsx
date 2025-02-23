import { useState} from 'react'
import { FormInput } from '../UI/FormInput'
import './style.css'

const defaultFormFields = {
	email:'',
	password:''

}


export function SignIn() {

	const [formFields, setFormFields]= useState(defaultFormFields)
	const { email, password } = formFields


	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({...formFields, [name]: value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("Email: ", email)
		console.log("Senha ", password)
		resetFormFields()
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}
	return (
		<div className="sign-container">
			<h2>Já possui conta?</h2>
			<span>Faça o login utilizando seu e-mail e senha</span>
			<form onSubmit={handleSubmit}>
				<FormInput
				label="Email"
				type="email"
				requerid
				onChange={handleChange}
				name="email"
				value={email}
				/>
				<FormInput
				label="Senha"
				type="password"
				requerid
				onChange={handleChange}
				name="password"
				value={password}
				/>

				<div className='buttons-container-sign'>
					<button className='button-login'>Login</button>
					<button className='button-login-google'>Login com Google</button>
				</div>
			</form>
		</div>
	)
}
