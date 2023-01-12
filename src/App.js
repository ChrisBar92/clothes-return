import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import './scss/main.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="logowanie" element={<Login />} />
					<Route path="rejestracja" element={<Registration />} />
					{/* <Route path="wylogowano" element={<Logout />} />  */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App
