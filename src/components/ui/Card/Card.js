import React from 'react';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Card = ({ onClick, icon, text, meta }) => {
	return (
		<Link to={meta}>
			<button className="card shadow center">
				<FontAwesomeIcon size="3x" icon={icon} className="glow" />
				<h1>{text}</h1>
			</button>
		</Link>
	);
};
