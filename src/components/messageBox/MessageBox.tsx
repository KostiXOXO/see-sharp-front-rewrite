import React from 'react';
import './MessageBox.scss';

interface IProps {
	error: string[] | null;
	message: string[] | null;
}
const MessageBox = ({ error = null, message = null }: IProps) => {
	return (
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
	);
};

export { MessageBox };
