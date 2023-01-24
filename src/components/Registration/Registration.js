import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
	const initialValues = {
		email: '',
		password: '',
		confirmPassword: '',
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
		} else if (values.password !== values.confirmPassword) {
			errors.password = 'Hasła nie są takie same!'
		}

		if (!values.confirmPassword || values.confirmPassword.length < 6) {
			errors.confirmPassword = 'Podane hasło jest za krótkie!'
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Hasła nie są takie same!'
		}
		return errors
	}

	return (
		<div className="registerPage container">
			<div className="registerPage__container">
				<button className="registerPage__X">
					<Link to="/">X</Link>
				</button>
				<h1 className="registerPage__title heading-section">Załóż konto</h1>
				<div className="img-decoration"></div>

				<form className="registerPage__form" onSubmit={handleSubmit}>
					<div className="registerPage__form-box">
						<div className="registerPage__form-item">
							<label htmlFor="email">Email</label>
							<input 
							value={formValues.email} 
							onChange={handleChange} 
							type="email" 
							name="email" 
							id="email" 
							/>
							<p className="errors">{formErrors.email}</p>
						</div>
						<div className="registerPage__form-item">
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
						<div className="registerPage__form-item">
							<label htmlFor="password">Powtórz Hasło</label>
							<input
								value={formValues.confirmPassword}
								onChange={handleChange}
								type="password"
								name="confirmPassword"
								id="confirmPassword"
							/>
							<p className="errors">{formErrors.confirmPassword}</p>
						</div>
					</div>

					<div className="registerPage__buttons">
						<button className="registerPage__buttons-btn">
							<Link to="/logowanie">Zaloguj się</Link>
						</button>
						<button className="registerPage__buttons-btn">Załóż konto</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Registration
