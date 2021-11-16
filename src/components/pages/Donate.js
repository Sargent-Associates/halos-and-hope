import React from 'react';
import { useLocation } from 'react-router';
import venmo from '../../assets/images/venmo.jpeg';
import { _copy } from '@globals';
import { Header } from '../ui/Header/Header';

const { donate } = _copy;

export const Donate = (props) => {
	return (
		<>
			<Header {...donate} />
			<div className="img">
				<img src={venmo} />
			</div>
		</>
	);
};
