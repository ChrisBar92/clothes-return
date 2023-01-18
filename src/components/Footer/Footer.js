import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
	return (
		<div className="footer container" id="footer">
			<p className="footer__copyright">Copyright by Coders Lab</p>
			<div className="footer__social">
				<a className="footer__social-icon" href="https://www.facebook.com" target="_blank" rel="noreferrer">
					<AiFillFacebook />
				</a>
				<a className="footer__social-icon" href="https://www.instagram.com" target="_blank" rel="noreferrer">
					<AiOutlineInstagram />
				</a>
			</div>
		</div>
	)
}

export default Footer
