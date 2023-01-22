import React, { useState } from 'react'
import Buttons from './Buttons'
import PlaceDescription from './PlaceDescription'
import Pagination from './Pagination'
import data from './data'

const HelpBuildings = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [offset, setOffset] = useState(0)

	const placeActive = data[activeIndex]

	return (
		<section className="helpBuildings container" id="helpBuildings">
			<p className="heading-section">Komu pomagamy?</p>
			<div className="img-decoration"></div>
			<Buttons setActiveIndex={setActiveIndex} activeIndex={activeIndex} setOffset={setOffset} />
			<div className="helpBuildings__box">
				<PlaceDescription placeActive={placeActive} />
			</div>
			<Pagination placeActive={placeActive} offset={offset} setOffset={setOffset} />
		</section>
	)
}

export default HelpBuildings
