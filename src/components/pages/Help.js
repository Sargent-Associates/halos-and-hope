import React from 'react';
import { _copy } from '@globals';
import { Scrim } from '@ui';
import { GoogleForm } from '../ui/GoogleForm/GoogleForm';
import './pages.scss';

const {
	googleForms: { help },
} = _copy;

export const Help = () => {
	return (
		<div class="page">
			<Scrim>
				<GoogleForm src={help} closeLink="/" />
			</Scrim>
		</div>
	);
};
