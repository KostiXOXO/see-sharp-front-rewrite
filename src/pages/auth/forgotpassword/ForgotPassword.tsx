import { BaseButton } from 'components/baseButton';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail } from 'utils/helpers/validation';
import { AuthService } from 'utils/services/AuthService';
import './ForgotPassword.scss';

const ForgotPassword = () => {
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string[] | null>(null);
	const [error, setError] = useState<string[] | null>(null);
	const { reset } = AuthService();

	const handleResetPassword = async () => {
		if (validateEmail(email)) {
			await reset(email).then((res: string[] | null) => {
				if (res) {
					setError(res);
				} else {
					setMessage(['Email with new password was just sent!']);
				}
			});
		} else {
			setError(['Email is not valid, check if You spelled it correctly..']);
		}
	};

	return (
		<div className="forgotPassword">
			<div className="mainFrame">
				<div className="mainFrame__header">
					<span className="mainFrame__header__title">
						<h3>Forgot Your password?</h3>
					</span>
				</div>
				<div className="mainFrame__body">
					<span className="message">
						Don’t worry! Enter your email address and we’ll send you instructions to reset your password.
					</span>
					<div className="mainFrame__body__form">
						<input
							type="email"
							value={email}
							placeholder="email"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					<BaseButton style="filled" text="Reset password" onClick={handleResetPassword} />
					<div className="messageBox">
						{message && (
							<div className="msgBox">
								{message.map((msg, key) => {
									return (
										<p className="msg" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
						{error && (
							<div className="msgBoxError">
								{error.map((msg, key) => {
									return (
										<p className="msg" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
					</div>
					<span>
						<Link to="/login" replace={location.pathname === '/login'}>
							Go back to login page.
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export { ForgotPassword };
