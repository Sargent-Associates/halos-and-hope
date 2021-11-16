import React from 'react';
import { _copy } from '@globals';
import { Scrim } from '@ui';
import { GoogleForm } from '../ui/GoogleForm/GoogleForm';

const {
	googleForms: { nominate },
} = _copy;

export const Nominate = () => {
	return (
		<Scrim>
			<GoogleForm src={nominate} closeLink="/" />
		</Scrim>
	);
};
