import React, { useState, useEffect } from 'react';
import { Card } from '@ui';
import { _copy } from '@globals';
import { Redirect } from 'react-router-dom';
import { Scrim } from './components/ui/Scrim/Scrim';
import { GoogleForm } from './components/ui/GoogleForm/GoogleForm';

import './global/scss/global.scss';
import './main.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import routes from './routes';

const {
	home,
	donate,
	buttons,
	googleForms: { nominate, help },
} = _copy;

function switchHomeText(text) {
	switch (text) {
		case 'donate':
			return donate;
		default:
			return home;
	}
}

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
