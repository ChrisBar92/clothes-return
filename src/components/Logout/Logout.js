import React from 'react'
import { Link } from 'react-router-dom'


const Logout = () => {
	return (
		<div className="logoutPage container">
			<div className="logoutPage__container">
				<button className="logoutPage__X">
					<Link to="/">X</Link>
				</button>
				<h1 className="logoutPage__title heading-section">
					Wylogowano nastąpiło <span>pomyślnie!</span>
				</h1>
				<div className="img-decoration"></div>
				<div className="logoutPage__button">
					<Link to="/" className="logoutPage__button-btn">
						Strona główna
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Logout
