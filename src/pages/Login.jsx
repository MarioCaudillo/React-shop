import React, {useRef} from 'react';
import '../styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit	=	(event)=>{
		event.preventDefault();
		const formData = new FormData(form.current); //form.current es un método de Formdata que trae el valor actual dentro del formulario
		const data ={
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref = {form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button 
					type="submit" 
					onClick={handleSubmit}
					className="primary-button login-button">
					Login 
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button"
				onClick={handleSubmit}>Sign up</button>

			</div>
		</div>
	);
}

export default Login;