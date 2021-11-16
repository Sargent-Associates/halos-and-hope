import React from 'react';
import { _copy } from '@globals';
import { Scrim } from '@ui';
import { GoogleForm } from '../ui/GoogleForm/GoogleForm';

const {
	googleForms: { help },
} = _copy;

export const Help = () => {
	return (
		<Scrim>
			<GoogleForm src={help} closeLink="/" />
		</Scrim>
	);
};
