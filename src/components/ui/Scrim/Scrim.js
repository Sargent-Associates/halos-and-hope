import React from 'react';
import { useNavigate } from 'react-router-dom';
import './scrim.scss';

export const Scrim = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate('/')} className="scrim">
			{children}
		</div>
	);
};
