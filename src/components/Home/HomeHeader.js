import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
	return (
		<header className="header container right-margin-section">
			<div className="header__img"></div>
			<div className="header__box">
				<h1 className="header__box-title heading-section">
					Zacznij pomagać!<span>Oddaj niechciane rzeczy w zaufane ręce</span> 
				</h1>
				<div className="header__box-img img-decoration"></div>
				<div className="header__box-buttons">
					<button className="header__box-btn header__box-btn--left btn-cta">
						<Link className="links" to="logowanie">
							Oddaj rzeczy
						</Link>
					</button>
					<button className="header__box-btn header__box-btn--right btn-cta">
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
