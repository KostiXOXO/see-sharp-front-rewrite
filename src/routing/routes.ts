import { IRoute } from 'utils/interfaces';
import { Login } from 'pages/auth/login';
import { TutorialsView } from 'pages/tutorialsView';
import LandingPage from 'pages/landingPage';
import { Registration } from 'pages/auth/registration';
import { Test } from 'pages/tutorialsView/Test/Test';
import { ForgotPassword } from 'pages/auth/forgotpassword/ForgotPassword';
import { VerifyEmail } from 'pages/auth/verifyEmail/VerifyEmail';
import { ChangePassword } from 'pages/auth/changePassword/ChangePassword';

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
		path: '/forgotpassword',
		exact: true,
		component: ForgotPassword,
		name: 'Forgot Password Page',
		protected: false,
	},
	{
		path: '/account/changepassword/:guid',
		exact: true,
		component: ChangePassword,
		name: 'Change Password Page',
		protected: false,
	},
	{
		path: '/account/verify/:guid',
		exact: true,
		component: VerifyEmail,
		name: 'Verify Email Page',
		protected: false,
	},
	{
		path: '/tutorials',
		exact: true,
		component: TutorialsView,
		name: 'Tutorials Page',
		protected: true,
	},
	{
		path: '/excercises',
		exact: true,
		component: TutorialsView,
		name: 'Excercises Page',
		protected: true,
	},
	{
		path: '/excercises/:exID',
		exact: true,
		component: TutorialsView,
		name: 'Excercise Page',
		protected: true,
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
