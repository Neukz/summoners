import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { regions } from '../constants/regions';

const SearchSummonerForm = () => {
	const [summonerName, setSummonerName] = useState('');
	// Set NA as default region
	const [selectedRegion, setSelectedRegion] = useState(regions[0].abbreviation);

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();

		// Navigate to Summoner page
		navigate(`summoners/${selectedRegion}/${summonerName}`);
	};

	return (
		<form onSubmit={handleSubmit} className="pb-6">
			<div className="flex justify-center space-x-4 mb-4">
				{/* Summoner name text field */}
				<input
					className="outline-none w-full bg-primary-light rounded-full pl-4 shadow max-w-md placeholder:text-slate-400 focus:shadow-md"
					type="text"
					placeholder="Name"
					required
					// Character limit allowed by Riot Games
					minLength={3}
					maxLength={16}
					value={summonerName}
					onChange={e => setSummonerName(e.target.value)}
				/>

				<button
					className="flex items-center justify-center space-x-1 outline-none bg-secondary text-primary-dark border-2 border-secondary rounded-full w-36 p-2 font-semibold hover:bg-primary-light hover:text-secondary active:scale-105 duration-300"
					type="submit"
				>
					<span>Search</span>
					<FaSearch />
				</button>
			</div>

			{/* Region selection */}
			<div className="flex flex-wrap justify-center gap-3">
				{regions.map(region => (
					<abbr
						className={`no-underline rounded px-2 py-1 font-medium cursor-pointer shadow hover:translate-y-1 duration-100 ${
							region.abbreviation === selectedRegion
								? 'bg-secondary text-primary-dark'
								: 'bg-primary-light'
						}`}
						title={region.name}
						key={region.abbreviation}
						onClick={() => setSelectedRegion(region.abbreviation)}
					>
						{region.abbreviation.toUpperCase()}
					</abbr>
				))}
			</div>
		</form>
	);
};

export default SearchSummonerForm;
