import React from 'react'
import data from './data'

const Buttons = ({ setActiveIndex, setOffset, activeIndex }) => {
	const setActive = id => {
		setActiveIndex(id)
	}

	return (
		<div className="helpBuildings__places">
			{data.map((item, index) => {
				return (
					<button
						key={index}
						className={`btn-cta helpBuildings__places-btn ${index === activeIndex ? 'active' : ''}`}
						onClick={() => {
							setActive(index)
							setOffset(0)
						}}>
						{item.recipient}
					</button>
				)
			})}
		</div>
	)
}

export default Buttons
