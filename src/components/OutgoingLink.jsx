import { HiOutlineExternalLink } from 'react-icons/hi';

const OutgoingLink = ({ name, href }) => {
	return (
		<a href={href} target="_blank">
			{name} <HiOutlineExternalLink className="inline" />
		</a>
	);
};

export default OutgoingLink;
