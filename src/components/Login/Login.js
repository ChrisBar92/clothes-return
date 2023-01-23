import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className="loginPage container">
			<div className="loginPage__container">
				<button className="loginPage__X">X</button>
				<h1 className="loginPage__title heading-section">Zaloguj się</h1>
				<div className="img-decoration"></div>
				<form className="loginPage__form">
					<div className="loginPage__form-item">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" required />
					</div>
					<div className="loginPage__form-item">
						<label htmlFor="password">Hasło</label>
						<input type="password" id="password" required />
					</div>
				</form>
				<div className="loginPage__buttons">
					<Link to="/rejestracja" className="loginPage__buttons-btn">
						Załóż konto
					</Link>
					<Link to="/" className="loginPage__buttons-btn">
						Zaloguj się
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
