import React from 'react'
import data from './data'

const Buttons = ({ setActiveIndex, setOffset }) => {
	return (
		<div className="helpBuildings__tabs">
			{data.map((item, index) => {
				return (
					<button
						key={index}
						className="btn-cta helpBuildings__tabs-btn"
						onClick={() => {
							setActiveIndex(index)
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
