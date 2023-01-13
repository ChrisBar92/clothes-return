import React from 'react'

const HomeThreeColumns = () => {
	return (
		<main>
			<section className="homeThreeColumns container">
				<div className="homeThreeColumns__background">
					<div className="homeThreeColumns__boxes">
						<div className="homeThreeColumns__box homeThreeColumns__box--left">
							<p className="homeThreeColumns__box-number">10</p>
							<p className="homeThreeColumns__box-category">Oddanych worków</p>
							<p className="homeThreeColumns__box-text">
								Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
								erat volutpat.
							</p>
						</div>
						<div className="homeThreeColumns__box">
							<p className="homeThreeColumns__box-number">5</p>
							<p className="homeThreeColumns__box-category">Wspartych organizacji</p>
							<p className="homeThreeColumns__box-text">
								Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
								erat volutpat.
							</p>
						</div>
						<div className="homeThreeColumns__box">
							<p className="homeThreeColumns__box-number">7</p>
							<p className="homeThreeColumns__box-category">Zorganizowanych zbiórek</p>
							<p className="homeThreeColumns__box-text">
								Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
								erat volutpat.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default HomeThreeColumns
