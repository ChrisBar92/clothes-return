import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from '../SimpleSteps/SimpleSteps'
import AboutUs from '../AboutUs/AboutUs'
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeHeader />
			<HomeThreeColumns />
			<SimpleSteps />
			<AboutUs />
			{/* <WhoWeHelp /> */}
			<Contact />
			<Outlet />
		</>
	)
}

export default Home
