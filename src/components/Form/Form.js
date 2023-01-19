import React from 'react'

const Form = () => {
	return (
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault()
			}}>
			<div className="heading-section">Skontaktuj się z nami</div>
			<div className="img-decoration"></div>
			<div className="form__container">
				<div className="form__container-item">
					<label htmlFor="name">Wpisz swoje imię</label>
					<input type="text" name="name" required placeholder="Krzysztof" />
				</div>
				<div className="form__container-item">
					<label htmlFor="email">Wpisz swój e-mail</label>
					<input type="email" name="email" required placeholder="abc@xyz.pl" />
				</div>
			</div>
			<div className="form__container-message">
				<label htmlFor="msg">Wpisz swoją wiadomość</label>
				<textarea
					name="msg"
					id="msg"
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "></textarea>
			</div>
			<div className="btn-cta form__container-button" type="submit" name="submit">
				Wyślij
			</div>
		</form>
	)
}

export default Form
