import React from 'react'
// import Organizations from './Organizations'

const Recipients = props => {
	return (
		<div className="whoWeHelp__box">
			<div className="whoWeHelp__box-title">
				{/* <button className="whoWeHelp__box-title-recipient">{props.recipient}</button> */}
			</div>
			{/* <p className="whoWeHelp__box-header">{props.title}</p> */}
			<div className="whoWeHelp__box-list">
				<div className="whoWeHelp__box-list-left">
					{/* <p className="whoWeHelp__box-list-left-title">{props.list.name}</p> */}
					{/* {/* <p className="whoWeHelp__box-list-left-description">{props.website}</p> */}
				</div>
				{/* <div className="whoWeHelp__box-list-right">
					<p className="whoWeHelp__box-list-right-stuff">{props.address.street}</p>
				</div>  */}
			</div>
		</div>
	)
}

export default Recipients
