import React from 'react'

const WhoWeHelp = () => {
	return (
		<section className="whoWeHelp container" id="whoWeHelp">
			<div className="heading-section">Komu pomagamy?</div>
			<div className="img-decoration"></div>
			<div className="whoWeHelp__box">
				<div className="whoWeHelp__box-title">
					<button className="whoWeHelp__box-title-recipient">Fundacjom</button>
					<button className="whoWeHelp__box-title-recipient">zbiorkom</button>
					<button className="whoWeHelp__box-title-recipient">organ</button>
				</div>
				<p className="whoWeHelp__box-header">
				W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
				</p>
				<div className="whoWeHelp__box-list">
					<div className="whoWeHelp__box-list-left">
						<p className="whoWeHelp__box-list-left-title">Fundacja dbam o zdrowie</p>
						<p className="whoWeHelp__box-list-left-description">
							cel i misja pomoc osobom znajdujacy sie w trudnej sytuacji materialnej
						</p>
					</div>
					<div className="whoWeHelp__box-list-right">
						<p className="whoWeHelp__box-list-right-stuff">ubrania jedzenie sprzed agd meble zabawki</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhoWeHelp
