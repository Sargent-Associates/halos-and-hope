import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Donate } from './components/pages/Donate';
import { Home } from './components/pages/Home';
import { Nominate } from './components/pages/Nominate';
import { Help } from './components/pages/Help';
import { WhoWeAre } from './components/pages/WhoWeAre';

export default (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/donate" element={<Donate />} />
		<Route path="/nominate" element={<Nominate />} />
		<Route path="/help" element={<Help />} />
		<Route path="/who-we-are" element={<WhoWeAre />} />
	</Routes>
);
