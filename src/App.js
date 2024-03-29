import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
		<HelmetProvider>
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
							<Route path="404" element={<NotFound />} />
							<Route path="*" element={<Navigate to="404" replace />} />
						</Routes>
					</AppContainer>
					<Footer />
				</Router>
			</RiotContextProvider>
		</HelmetProvider>
	);
}

export default App;
