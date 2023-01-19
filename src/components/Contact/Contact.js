import React from 'react'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import BackgroundImg from '../../images/Background Image@2x.png'

const Contact = () => {
	return (
		<>
			<div className="contact container right-margin-section">
				<div className="contact__box contact__box-left">
					<img className="contact__box-left-img" src={BackgroundImg} alt="zdjęcie ubrań ułożonych jedno na drugim" />
				</div>
				<div className="contact__box contact__box-right">
					<Form />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact
