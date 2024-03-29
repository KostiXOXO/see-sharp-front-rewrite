import { BaseButton } from 'components/baseButton';
import React, { useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ILoginData } from 'utils/interfaces/auth';
import { AuthService } from 'services';
import { GoogleLoginButton } from './components/googleLogin/GoogleLoginButton';
import './Login.scss';

type TStateAction = 'SET_EMAIL' | 'SET_PASSWORD';

interface IState {
	type: TStateAction;
	value: string;
}

const initialFormState: ILoginData = {
	email: '',
	password: '',
};

const reducer = (state = initialFormState, action: IState) => {
	switch (action.type) {
		case 'SET_EMAIL':
			return { ...state, email: action.value };
		case 'SET_PASSWORD':
			return { ...state, password: action.value };
		default:
			return state;
	}
};

const Login = (): JSX.Element => {
	const { login } = AuthService();
	const history = useHistory();
	const [state, dispatch] = useReducer(reducer, initialFormState);

	const [message, setMessage] = useState<string[] | null>(null);

	const loginWithEmail = async ({ email, password }: ILoginData) => {
		setMessage(null);
		await login({ email, password })
			.then(() => history.push('/'))
			.catch(() => {
				setMessage(['Invalid email or password']);
			});
	};

	const handleLogin = () => {
		loginWithEmail({ email: state.email, password: state.password });
	};

	return (
		<div className="login">
			<div className="mainFrame">
				<div className="mainFrame__header">
					<span className="mainFrame__header__title">
						<h3>Sign In</h3>
					</span>
				</div>
				<div className="mainFrame__body">
					<div className="mainFrame__body__form">
						<input
							type="email"
							value={state.email}
							placeholder="email"
							onChange={(e) => dispatch({ type: 'SET_EMAIL', value: e.target.value })}
						/>
						<input
							type="password"
							value={state.password}
							placeholder="password"
							onChange={(e) => dispatch({ type: 'SET_PASSWORD', value: e.target.value })}
						/>
					</div>
					<div className="messageBox">
						{message && (
							<div className="msgBox">
								{message.map((msg, key) => {
									return (
										<p className="errorMessage" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
					</div>
					<BaseButton style="filled" text="Login" onClick={handleLogin} />
					<span>
						<Link to="/forgotpassword" replace={location.pathname === '/forgotpassword'}>
							Forgot Your password?
						</Link>
					</span>
					<span>
						<Link to="/register" replace={location.pathname === '/register'}>
							{`Don't have an account?`}
						</Link>
					</span>
					<div className="socialLogin">
						<span className="socialLogin__bottomText">You can also sign in with:</span>
						<GoogleLoginButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export { Login };
