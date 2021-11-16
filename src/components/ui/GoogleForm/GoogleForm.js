import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import './google-form.scss';
import { Link } from 'react-router-dom';

export const GoogleForm = ({ src, closeLink }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		return () => {
			setLoading(false);
		};
	}, []);

	const endLoad = () => {
		setLoading(false);
	};

	return (
		<div className="google-form shadow">
			<Link to={closeLink}>
				<FontAwesomeIcon icon={faTimes} size="2x" />
			</Link>
			{loading ? (
				<Loader className="loader" type="Grid" color="grey" height={80} width={80} />
			) : null}
			<iframe
				style={{ position: 'relative', zIndex: 10 }}
				src={src}
				height="95%"
				width="100%"
				onLoad={endLoad}
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			/>
		</div>
	);
};
