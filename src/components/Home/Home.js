import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomeHeader from './HomeHeader'

const Home = () => {
	return (
		<div>
			<Navbar />
			<HomeHeader />
			<Outlet />
		</div>
	)
}

export default Home
