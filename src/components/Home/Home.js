import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from '../SimpleSteps/SimpleSteps'

const Home = () => {
	return (
		<div>
			<Navbar />
			<HomeHeader />
			<HomeThreeColumns />
			<SimpleSteps />
			<Outlet />
		</div>
	)
}

export default Home
