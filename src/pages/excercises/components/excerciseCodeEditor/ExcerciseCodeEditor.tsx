import { BaseButton } from 'components/baseButton';
import { CodeEditor } from 'components/codeEditor/CodeEditor';
import React, { useState } from 'react';
import './ExcerciseCodeEditor.scss';

const ExcerciseCodeEditor = () => {
	const [code, setCode] = useState<string>('');

	const handleSubmit = async () => {
		// setResponse('//We are processing Your code');
		// await sendCodeToCompiler(code as string).then(async (res) => {
		// 	await checkForResponse(res).then((response) => {
		// 		setResponse(response);
		// 	});
		// });
	};

	return (
		<div className="excerciseCodeContainer">
			<div className="editor">
				<CodeEditor width="60rem" height="20rem" code={code} setCode={setCode} />
			</div>
			<div className="buttons">
				<div className="buttons__run">
					<BaseButton text="Run Code" onClick={handleSubmit} />
				</div>
				<div className="buttons__submit">
					<span>Everything seems good?</span>
					<BaseButton text="Submit!" onClick={handleSubmit} />
				</div>
			</div>
			<div className="output">
				<div className="sampleInput"></div>
				<div className="expectedOutput"></div>
				<div className="usersOutput"></div>
			</div>
		</div>
	);
};

export { ExcerciseCodeEditor };
