import React from 'react';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = ({ toggleModal, icon, text }) => {
	return (
		<button onClick={toggleModal} className="card shadow center">
			<FontAwesomeIcon size="3x" icon={icon} className="glow" />
			<h1>{text}</h1>
		</button>
	);
};
