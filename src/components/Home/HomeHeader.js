import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
	return (
		<header className="header right-margin-section">
			<div className="header__img"></div>
			<div className="header__box">
				<h2 className="header__box-title heading-section">
					Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce
				</h2>
				<div className="header__box-img"></div>
				<div className="header__box-buttons">
					<button className="header__box-btn btn-cta">
						<Link className="links" to="logowanie">
							Oddaj rzeczy
						</Link>
					</button>
					<button className="header__box-btn btn-cta">
						<Link className="links" to="logowanie">
							Zorganizuj zbiórkę
						</Link>
					</button>
				</div>
			</div>
		</header>
	)
}

export default HomeHeader
