import { BaseButton } from 'components/baseButton';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { verifyEmail } from 'utils/web/webMethods/requests';
import './VerifyEmail.scss';

const VerifyEmail = () => {
	const { guid } = useParams<{ guid: string }>();
	const [message, setMessage] = useState<string[] | null>(null);
	const [errorMsg, setErrorMsg] = useState<string[] | null>(null);

	const handleVerifyEmail = async () => {
		setErrorMsg(null);
		setMessage(null);
		try {
			await verifyEmail(guid)
				.then((res) => {
					console.log(res);
					setMessage([`All done! Let's go - code something!`, 'You can close this tab now']);
				})
				.catch((error) => {
					setErrorMsg([error.response.data]);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="verify">
			<div className="mainFrame">
				<div className="mainFrame__header">
					<span className="mainFrame__header__title">
						<h3>Account verification</h3>
					</span>
				</div>
				<div className="mainFrame__body">
					<span className="message">
						<p>You can now start off Your journey with C# with one simple click!</p>
					</span>
					<BaseButton style="filled" text="Activate Your Account" onClick={handleVerifyEmail} />
					<div className="messageBox">
						{message && (
							<div className="msgBox">
								{message.map((msg, key) => {
									return (
										<p className="verifiedMessage" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
						{errorMsg && (
							<div className="msgBox">
								{errorMsg.map((msg, key) => {
									return (
										<p className="errorMessage" key={key}>
											{'> ' + msg}
										</p>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { VerifyEmail };
