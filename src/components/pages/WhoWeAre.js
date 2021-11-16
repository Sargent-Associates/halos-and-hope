import React from 'react';
import { _copy } from '@globals';
import { Header } from '../ui/Header/Header';

const { whoWeAre } = _copy;

export const WhoWeAre = () => {
	return <Header {...whoWeAre} />;
};
