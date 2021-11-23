import React from 'react';
import { Card } from '@ui';
import { _copy } from '@globals';
import routes from './routes';

import './global/scss/global.scss';
import './main.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const { buttons } = _copy;

export const Main = () => {
	const mappedButtons = buttons.map((item, i) => {
		return <Card key={i} {...item} />;
	});

	return (
		<div className="main dim">
			{routes}
			<div className="card-wrapper">{mappedButtons}</div>
		</div>
	);
};
