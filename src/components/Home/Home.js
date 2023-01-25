import React from 'react'
// import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from '../SimpleSteps/SimpleSteps'
import AboutUs from '../AboutUs/AboutUs'
import HelpBuildings from '../HelpBuildings/HelpBuildings'
import Contact from '../Contact/Contact'

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeHeader />
			<HomeThreeColumns />
			<SimpleSteps />
			<AboutUs />
			<HelpBuildings />
			<Contact />
		
			{/* <Outlet /> */}
		</>
	)
}

export default Home
