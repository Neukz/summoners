import { useContext } from 'react';
import spinner from '../../assets/spinner.gif';

import RiotContext from '../../context/riot/RiotContext';

const Loading = ({ children }) => {
	const { loading } = useContext(RiotContext);

	// Display loading UX before data is available
	return loading ? (
		<img
			className="w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src={spinner}
			alt="Loading..."
		/>
	) : (
		children
	);
};

export default Loading;
