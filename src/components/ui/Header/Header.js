import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo_white.png';

export const Header = ({ title, subText }) => {
	const path = useLocation().pathname;
	const mappedSubText = subText.map((item, i) => {
		return (
			<p key={i} className="subtitle glow white">
				{item}
			</p>
		);
	});
	return (
		<header>
			{title === 'logo' ? <img src={logo} /> : <h1 className="title glow white">{title}</h1>}
			{mappedSubText}
			{path !== '/' && (
				<Link to="/">
					<FontAwesomeIcon icon={faHome} size="3x" />
				</Link>
			)}
		</header>
	);
};
