import React from 'react';

export const Header = ({ title, subText }) => {
	const mappedSubText = subText.map((item, i) => {
		return (
			<p key={i} className="subtitle glow white">
				{item}
			</p>
		);
	});
	return (
		<header>
			<h1 className="title glow white">{title}</h1>
			{mappedSubText}
		</header>
	);
};
