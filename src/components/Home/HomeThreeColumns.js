import React from 'react'

const HomeThreeColumns = () => {
	return (
		<main>
			<section className="homeThreeColumns">
				<div className="homeThreeColumns__background">
					<div className="wrapper">
						<div className="homeThreeColumns__boxes">
							<div className="homeThreeColumns__box">
								<div className="homeThreeColumns__box-number">10</div>
								<div className="homeThreeColumns__box-category">Oddanych worków</div>
								<div className="homeThreeColumns__box-text">
                                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
								</div>
							</div>
							<div className="homeThreeColumns__box">
								<div className="homeThreeColumns__box-number">5</div>
								<div className="homeThreeColumns__box-category">Wspartych organizacji</div>
								<div className="homeThreeColumns__box-text">
								Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
								</div>
							</div>
							<div className="homeThreeColumns__box">
								<div className="homeThreeColumns__box-number">7</div>
								<div className="homeThreeColumns__box-category">Zorganizowanych zbiórek</div>
								<div className="homeThreeColumns__box-text">
								Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default HomeThreeColumns
