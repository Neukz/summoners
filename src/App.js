import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summoner from './pages/Summoner';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='summoner/:region/:summonerName' element={<Summoner />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
