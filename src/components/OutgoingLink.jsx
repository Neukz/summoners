import { HiOutlineExternalLink } from 'react-icons/hi';

const OutgoingLink = ({ name, href }) => {
	return (
		// eslint-disable-next-line
		<a href={href} target="_blank">
			{name} <HiOutlineExternalLink className="inline" />
		</a>
	);
};

export default OutgoingLink;
