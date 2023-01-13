import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns'

const Home = () => {
	return (
		<div>
			<Navbar />
			<HomeHeader />
			<HomeThreeColumns />
			<Outlet />
		</div>
	)
}

export default Home
