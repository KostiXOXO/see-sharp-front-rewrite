import { IRoute } from 'utils/interfaces';
import { Login } from 'pages/login';
import { TutorialsView } from 'pages/tutorialsView';
import LandingPage from 'pages/landingPage';
import { Registration } from 'pages/registration';
import { Test } from 'pages/tutorialsView/Test/Test';

const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: LandingPage,
		name: 'Landing Page',
		protected: false,
	},
	{
		path: '/login',
		exact: true,
		component: Login,
		name: 'Login Page',
		protected: false,
	},
	{
		path: '/register',
		exact: true,
		component: Registration,
		name: 'Register Page',
		protected: false,
	},
	{
		path: '/tutorials',
		exact: true,
		component: TutorialsView,
		name: 'Tutorials View',
		protected: false,
	},
	{
		path: '/test',
		exact: true,
		component: Test,
		name: 'Tutorials Test',
		protected: false,
	},
];

export default routes;
