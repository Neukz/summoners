import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Summoner from './components/pages/Summoner';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import AppContainer from './components/layout/AppContainer';
import Footer from './components/layout/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<AppContainer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="summoners/:region/:summonerName"
						element={<Summoner />}
					/>
					<Route path="about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AppContainer>
			<Footer />
		</Router>
	);
}

export default App;
