import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

import Organizations from './Organizations'

const WhoWeHelp = () => {
	const users = []
	const [pageNumber, setPageNumber] = useState(0)

	const usersPerPage = 3
	const pagesVisited = pageNumber * usersPerPage
	const displayUsers = Organizations.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index) => {
		return (
			<div className="user">
				{/* <h3>{user.recipient}</h3>
				<h3>{user.title}</h3> */}
				{/* <h3>{user.list.name}</h3>
					<h3>{user.list.name}</h3>
					<h3>{user.stuff}</h3> */}
				{/* <h3>{user.address.street}</h3> */}
			</div>
		)
	})

	const pageCount = Math.ceil(Organizations.length / usersPerPage)
	const changePage = ({ selected }) => {
		setPageNumber(selected)
	}

	return (
		<div className="whoWeHelp" id="whoWeHelp">
			{displayUsers}
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'paginationBttns'}
				previousLinkClassName={'previousBttn'}
				nextLinkClassName={'nextBttn'}
				disabledClassname={'paginationDisabled'}
				activeClassName={'paginationActive'}
			/>
		</div>
	)
}

export default WhoWeHelp
