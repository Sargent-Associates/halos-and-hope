import React from 'react';
import { Header, Card } from '@ui';
import { _copy } from '@globals';

import './global/scss/global.scss';
import './main.scss';

const { home, buttons } = _copy;

export const Main = () => {
	const mappedButtons = buttons.map((item, i) => {
		return <Card key={i} {...item} />;
	});
	return (
		<>
			<div className="main dim">
				<Header {...home} />
			</div>
			<div className="card-wrapper">{mappedButtons}</div>
			<footer></footer>
		</>
	);
};
