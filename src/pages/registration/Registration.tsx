import { BaseButton } from 'components/baseButton';
import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { IRegisterData } from 'utils/interfaces/auth';
import { AuthService } from 'utils/services/AuthService';
import './Registration.scss';

type TStateAction = 'SET_USERNAME' | 'SET_PASSWORD' | 'SET_PASSWORD_RETYPED' | 'SET_EMAIL';

interface IState {
	type: TStateAction;
	value: string;
}

const initialFormState: IRegisterData = {
	username: '',
	password: '',
	passwordRetyped: '',
	email: '',
};

const reducer = (state = initialFormState, action: IState) => {
	switch (action.type) {
		case 'SET_USERNAME':
			return { ...state, username: action.value };
		case 'SET_PASSWORD':
			return { ...state, password: action.value };
		case 'SET_PASSWORD_RETYPED':
			return { ...state, passwordRetyped: action.value };
		case 'SET_EMAIL':
			return { ...state, email: action.value };
		default:
			return state;
	}
};

const Registration = () => {
	const { register } = AuthService();

	const [state, dispatch] = useReducer(reducer, initialFormState);

	const registerWithEmail = async ({ username, password, passwordRetyped, email }: IRegisterData) => {
		await register({ username, password, passwordRetyped, email }).catch((err) => console.log(err));
	};

	const handleRegister = () => {
		registerWithEmail({
			username: state.username,
			password: state.password,
			passwordRetyped: state.passwordRetyped,
			email: state.email,
		});
	};

	return (
		<div className="registration">
			<div className="mainFrame">
				<div className="mainFrame__header">
					<span className="mainFrame__header__title">
						<h3>Sign up</h3>
					</span>
				</div>
				<div className="mainFrame__body">
					<div className="mainFrame__body__form">
						<input
							type="text"
							value={state.username}
							placeholder="username"
							onChange={(e) => dispatch({ type: 'SET_USERNAME', value: e.target.value })}
						/>
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
						<input
							type="password"
							value={state.passwordRetyped}
							placeholder="retype password"
							onChange={(e) => dispatch({ type: 'SET_PASSWORD_RETYPED', value: e.target.value })}
						/>
					</div>
					{/* <div className="messageBox">
						{errors && (
							<div className="msgBox">
								{errors?.map((msg, key) => {
									return (
										<p className="errorMessage" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
					</div> */}
					<div className="mainFrame__body__privacyPolicy">
						<input type="checkbox" />
						<span>
							I accept the <a>privacy policy</a>.
						</span>
					</div>

					<BaseButton style="filled" text="Sign Up" onClick={handleRegister} />
					<span>
						<span>or</span>
						<span>
							<Link to="/login" replace={location.pathname === '/login'}>
								Log in
							</Link>
						</span>
						<span>if You already have an account.</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export { Registration };
