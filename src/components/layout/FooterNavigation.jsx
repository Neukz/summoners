import { Link } from 'react-router-dom';
import OutgoingLink from '../OutgoingLink';
import { footerLinks } from '../../constants/footerLinks';

const FooterNavigation = () => {
	return (
		<nav className="text-secondary w-full lg:text-sm">
			<ul className="grid gap-y-1 grid-cols-2 sm:grid-cols-3 md:gap-y-0 lg:flex lg:justify-evenly">
				{footerLinks.map(({ name, url, order, outgoing }, index) => (
					<li
						key={index}
						className={`order-${order} sm:order-none hover:text-secondary-dark`}
					>
						{outgoing ? (
							<OutgoingLink name={name} href={url} />
						) : (
							<Link to={url}>{name}</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default FooterNavigation;
