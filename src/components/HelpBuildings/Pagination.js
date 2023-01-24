import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ placeActive, offset, setOffset }) => {
	const placePerPage = 3
	const placeList = placeActive.list.slice(offset, offset + placePerPage)
	const pageCount = Math.ceil(placeActive.list.length / placePerPage)

	const changePage = ({ selected }) => {
		const newOffset = (selected * placePerPage) % placeActive.list.length
		setOffset(newOffset)
	}

	return (
		<ul className="helpBuildings__list">
			{placeList.map((place, index) => {
				return (
					<li key={index} className="helpBuildings__list-item">
						<div className="helpBuildings__list-item-left">
							<h3 className="helpBuildings__list-item-left-title">{place.name}</h3>
							<p className="helpBuildings__list-item-left-description">{place.description}</p>
						</div>
						<p className="helpBuildings__list-item-right">{place.stuff}</p>
					</li>
				)
			})}
			{placeActive.list.length <= 3 ? null : (
				<ReactPaginate
					previousLabel={'Poprzednia'} 
					nextLabel={'Następna'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'helpBuildings__pagination'}
					pageClassName={'helpBuildings__pagination-item'}
					pageLinkClassName={'helpBuildings__pagination-item-link'}
				/>
			)}
		</ul>
	)
}

export default Pagination
