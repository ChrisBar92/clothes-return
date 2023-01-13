import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from '../SimpleSteps/SimpleSteps'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeHeader />
			<HomeThreeColumns />
			<SimpleSteps />
			<AboutUs/>
			<Outlet />
		</>
	)
}

export default Home
