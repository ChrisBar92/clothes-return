import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	const initialValues = {
		email: '',
		password: '',
	}

	const [formValues, setFormValues] = useState(initialValues)
	const [formErrors, setFormErrors] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setFormErrors(validate(formValues))
		setIsSubmit(true)
	}

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		} // eslint-disable-next-line
	}, [formValues])

	const validate = values => {
		const errors = {}
		const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

		if (!values.email || !regexEmail.test(values.email)) {
			errors.email = 'Podany email jest nieprawidłowy!'
		}

		if (!values.password || values.password.length < 6) {
			errors.password = 'Podane hasło jest za krótkie!'
		}
		return errors
	}

	return (
		<div className="loginPage container">
			<div className="loginPage__container">
				<button className="loginPage__X">
					<Link to="/">X</Link>
				</button>
				<h1 className="loginPage__title heading-section">Zaloguj się</h1>
				<div className="img-decoration"></div>
				<form className="loginPage__form" onSubmit={handleSubmit}>
					<div className="registerPage__form-box">
						<div className="loginPage__form-item">
							<label htmlFor="email">Email</label>
							<input value={formValues.email} onChange={handleChange} type="email" name="email" id="email" />
							<p className="errors">{formErrors.email}</p>
						</div>
						<div className="loginPage__form-item">
							<label htmlFor="password">Hasło</label>
							<input
								value={formValues.password}
								onChange={handleChange}
								type="password"
								name="password"
								id="password"
							/>
							<p className="errors">{formErrors.password}</p>
						</div>
					</div>
					<div className="loginPage__buttons">
						<button className="loginPage__buttons-btn">
							<Link to="/rejestracja">Załóż konto</Link>
						</button>

						<button className="loginPage__buttons-btn">Zaloguj się</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
