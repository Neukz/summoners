import { useContext } from 'react';
import spinner from '../../assets/spinner.gif';

import RiotContext from '../../context/riot/RiotContext';

const Loading = ({ children }) => {
	const { loading } = useContext(RiotContext);

	// Display loading UX before data is available
	return loading ? (
		<div className="flex justify-center items-center h-full">
			<img className="w-12" src={spinner} alt="Loading..." />
		</div>
	) : (
		children
	);
};

export default Loading;
