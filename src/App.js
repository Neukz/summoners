import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summoner from './pages/Summoner';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import AppContainer from './components/layout/AppContainer';
import Footer from './components/layout/Footer';

import { RiotContextProvider } from './context/riot/RiotContext';

function App() {
	return (
		<RiotContextProvider>
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
		</RiotContextProvider>
	);
}

export default App;
