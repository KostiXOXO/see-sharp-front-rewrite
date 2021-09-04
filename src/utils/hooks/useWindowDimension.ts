import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerWidth: winWidth, innerHeight: winHeight } = window;
	return {
		winWidth,
		winHeight,
	};
}

interface IWinDimension {
	winWidth: number;
	winHeight: number;
}

export default function useWindowDimensions(): IWinDimension {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
