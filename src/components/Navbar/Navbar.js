import React from 'react'
import { Link } from 'react-scroll'
import UserMenu from './UserMenu'

const Navbar = () => {
	return (
		<nav className="nav right-margin-section" id="/">
			<div className="nav__container">
				<UserMenu />

				<ul className="nav__list">
					<Link activeClass="active" className="nav__list-item" to="/" offset={-80} duration={300}>
						Start
					</Link>
					<Link activeClass="active" className="nav__list-item" to="simpleSteps" offset={-148} duration={300}>
						O co chodzi?
					</Link>
					<Link activeClass="active" className="nav__list-item" to="aboutUs" offset={-80} duration={300}>
						O nas
					</Link>
					<Link activeClass="active" className="nav__list-item" to="places" offset={-80} duration={300}>
						Fundacja i organizacje
					</Link>
					<Link activeClass="active" className="nav__list-item" to="contact" offset={-80} duration={300}>
						Kontakt
					</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
