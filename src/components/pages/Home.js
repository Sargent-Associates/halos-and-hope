import React from 'react';
import { Header } from '../ui/Header/Header';
import { _copy } from '@globals';

const { home } = _copy;

export const Home = () => {
	return <Header {...home} />;
};
