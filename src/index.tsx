import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import App from 'core';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
