import { BaseButton } from 'components/baseButton';
import { MessageBox } from 'components/messageBox';
import React, { useReducer } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { validatePassword } from 'utils/helpers/validation';
import { IPasswordChange } from 'utils/interfaces/auth';
import { resetPassword } from 'web/webMethods/requests/auth';
import './ChangePassword.scss';

type TStateAction = 'SET_PASSWORD' | 'SET_PASSWORD_RETYPED';

interface IState {
	type: TStateAction;
	value: string;
}

const initialFormState: IPasswordChange = {
	password: '',
	passwordRetyped: '',
};

const reducer = (state = initialFormState, action: IState) => {
	switch (action.type) {
		case 'SET_PASSWORD':
			return { ...state, password: action.value };
		case 'SET_PASSWORD_RETYPED':
			return { ...state, passwordRetyped: action.value };

		default:
			return state;
	}
};

const ChangePassword = () => {
	const params: { guid: string } = useParams();

	const [state, dispatch] = useReducer(reducer, initialFormState);

	const [message, setMessage] = useState<string[] | null>(null);
	const [error, setError] = useState<string[] | null>(null);

	const handleChangePassword = async () => {
		setError(null);
		setMessage(null);
		const token = params.guid;

		if (!(state.password === state.passwordRetyped)) {
			return setError(["Passwords doesn't match"]);
		}
		if (!validatePassword(state.password)) {
			return setError(["Password doesn't meet out standards"]);
		}
		await resetPassword({
			password: state.password,
			passwordRetyped: state.passwordRetyped,
			changePasswordGuid: token,
		})
			.then(() => {
				const link = <Link to="/login">Log In</Link>;
				return setMessage([`Password successfully changed! Go ahead, ${link}!`]);
			})
			.catch(() => {
				return setError(['What u trynna do? Enter valid link!']);
			});
	};
	return (
		<div className="changePassword">
			<div className="mainFrame">
				<div className="mainFrame__header">
					<span className="mainFrame__header__title">
						<h3>You can change Your password here!</h3>
					</span>
				</div>
				<div className="mainFrame__body"></div>
				<div className="mainFrame__body__form">
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
					<BaseButton text="Change password" onClick={handleChangePassword} />
					<MessageBox error={error} message={message} />
				</div>
			</div>
		</div>
	);
};

export { ChangePassword };
