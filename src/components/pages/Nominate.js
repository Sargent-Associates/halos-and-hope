import React from 'react';
import { _copy } from '@globals';
import { Scrim } from '@ui';
import { GoogleForm } from '../ui/GoogleForm/GoogleForm';
import './pages.scss';

const {
	googleForms: { nominate },
} = _copy;

export const Nominate = () => {
	return (
		<div class="page">
			<Scrim>
				<GoogleForm src={nominate} closeLink="/" />
			</Scrim>
		</div>
	);
};
