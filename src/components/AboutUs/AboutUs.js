import signature from '../../images/Signature.svg'

import React from 'react'

const AboutUs = () => {
	return (
		<section className="aboutUs" id="aboutUs">
			<div className="aboutUs__box aboutUs__box--left">
				<div className="heading-section">O nas</div>
				<div className="img-decoration"></div>
				<p className="aboutUs__box-text">
					Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea
					prairie turnip leek lentil turnip greens parsnip.
				</p>
				<div className="aboutUs__box-signature">
					<img src={signature} alt="" />
				</div>
			</div>
			<div className="aboutUs__box aboutUs__box--right"></div>
		</section>
	)
}

export default AboutUs
