import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterSwitch } from './routing';

const App = () => {
	return (
		<Router>
			<RouterSwitch />
		</Router>
	);
};

export default App;
