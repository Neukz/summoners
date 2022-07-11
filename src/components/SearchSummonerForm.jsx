import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { regions } from '../constants/regions';

const SearchSummonerForm = () => {
	const [summonerName, setSummonerName] = useState('');
	// Set NA1 as default region code
	const [regionCode, setRegionCode] = useState(regions[0].code);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(summonerName);
		console.log(regionCode);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex justify-center space-x-4 mb-4">
				{/* Summoner name text field */}
				<input
					className="outline-none w-full bg-primary-light rounded-full pl-4 placeholder:text-slate-400 caret-secondary max-w-md"
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
						className={`no-underline rounded px-2 py-1 cursor-pointer hover:translate-y-1 duration-100 ${
							region.code === regionCode
								? 'bg-secondary text-primary-dark'
								: 'bg-primary-light'
						}`}
						title={region.name}
						key={region.abbreviation}
						onClick={() => setRegionCode(region.code)}
					>
						{region.abbreviation}
					</abbr>
				))}
			</div>
		</form>
	);
};

export default SearchSummonerForm;
