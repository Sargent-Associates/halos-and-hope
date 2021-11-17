import React from 'react';
import venmo from '../../assets/images/venmo.jpeg';
import { _copy } from '@globals';
import { Header } from '../ui/Header/Header';
import './pages.scss';

const { donate } = _copy;

export const Donate = (props) => {
	return (
		<>
			<Header {...donate} />
			<div className="spacer" />
			<div className="donate img">
				<img src={venmo} />
			</div>
		</>
	);
};
