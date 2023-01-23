import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
	return (
		<div className="registerPage container">
			<div className="registerPage__container">
				<button className="registerPage__X">
					<Link to="/">X</Link>
				</button>
				<h1 className="registerPage__title heading-section">Załóż konto</h1>
				<div className="img-decoration"></div>
				<form className="registerPage__form">
					<div className="registerPage__form-item">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" required />
					</div>
					<div className="registerPage__form-item">
						<label htmlFor="password">Hasło</label>
						<input type="password" id="password" required />
					</div>
					<div className="registerPage__form-item">
						<label htmlFor="password">Powtórz Hasło</label>
						<input type="password" id="password2" required />
					</div>
				</form>
				<div className="registerPage__buttons">
					<Link to="/logowanie" className="registerPage__buttons-btn">
						Zaloguj się
					</Link>
					<Link to="/" className="registerPage__buttons-btn">
						Załóż konto
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Registration
