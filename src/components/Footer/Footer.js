import React from 'react'
import FacebookImg from '../../images/Facebook@2x.png'
import InstagramImg from '../../images/Instagram@2x.png'

const Footer = () => {
	return (
		<div className="footer container right-margin-section">
			<p className="footer__copyright">Copyright by Coders Lab</p>
			<div className="footer__social">
				<a className="footer__social-link" href="https://www.facebook.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={FacebookImg} alt="Facebook icon" />
				</a>
				<a className="footer__social-link" href="https://www.instagram.com" target="_blank" rel="noreferrer">
					<img className="footer__social-icon" src={InstagramImg} alt="Instagram icon" />
				</a>
			</div>
		</div>
	)
}

export default Footer
