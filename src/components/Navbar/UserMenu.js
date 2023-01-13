import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
	return (
		<ul className="nav__topMenu">
			<li className="nav__topMenu-item nav__topMenu-item-login">
				<Link className="nav__topMenu-link" to="logowanie">
					Zaloguj
				</Link>
			</li>
			<li className="nav__topMenu-item nav__topMenu-item-registration">
				<Link className="nav__topMenu-link" to="rejestracja">
					Załóż konto
				</Link>
			</li>
		</ul>
	)
}

export default UserMenu
