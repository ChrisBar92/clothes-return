import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../../images/Icon-1@2x.png'
import icon2 from '../../images/Icon-2@2x.png'
import icon3 from '../../images/Icon-3@2x.png'
import icon4 from '../../images/Icon-4@2x.png'


const SimpleSteps = () => {
	return (
		<section className="simpleSteps" id="simpleSteps">
			<div className="simpleSteps__container container">
				<p className="heading-section">Wystarczą 4 proste kroki</p>
				<div className="img-decoration"></div>
				<div className="simpleSteps__boxes">
					<div className="simpleSteps__box">
						<img className="simpleSteps__box-img" src={icon1} alt="" />
						<p className="simpleSteps__box-header">Wybierz rzeczy</p>
						<p className="simpleSteps__box-text">ubrania, zabawki, sprzęt i inne</p>
					</div>
					<div className="simpleSteps__box">
						<img className="simpleSteps__box-img" src={icon2} alt="" />
						<p className="simpleSteps__box-header">Spakuj je</p>
						<p className="simpleSteps__box-text">skorzystaj z worków na śmieci</p>
					</div>
					<div className="simpleSteps__box">
						<img className="simpleSteps__box-img" src={icon3} alt="" />
						<p className="simpleSteps__box-header">Zdecyduj komu chcesz pomóc</p>
						<p className="simpleSteps__box-text">wybierz zaufane miejsce</p>
					</div>
					<div className="simpleSteps__box">
						<img className="simpleSteps__box-img" src={icon4} alt="" />
						<p className="simpleSteps__box-header">Zamów kuriera</p>
						<p className="simpleSteps__box-text">kurier przyjedzie w dogodnym terminie</p>
					</div>
				</div>
				<button className="btn-cta">
					<Link className="links" to="logowanie">
						Oddaj rzeczy
					</Link>
				</button>
			</div>
		</section>
	)
}

export default SimpleSteps
