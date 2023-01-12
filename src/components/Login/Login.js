import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div>
			<h2>Strona logowania</h2>
			<Link to="/" className="btn">
				Wróć na stronę główną
			</Link>
		</div>
	)
}

export default Login
