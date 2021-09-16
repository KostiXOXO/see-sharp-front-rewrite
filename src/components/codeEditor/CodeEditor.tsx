import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { defaultValue } from './defaultValue';
import './CodeEditor.scss';

interface ICodeEditor {
	width: string;
	height: string;
	code: string;
	setCode: (val: string) => void;
}

const CodeEditor = ({ width, height, code, setCode }: ICodeEditor): JSX.Element => {
	// const [code, setCode] = useState<string>('');

	function handleEditorChange(value: string | undefined) {
		return value && setCode(value);
	}

	useEffect(() => {
		setCode(defaultValue());
		return () => {
			setCode('');
		};
	}, []);

	return (
		<div className="codeEditor">
			<Editor
				className="editorComponent"
				height={height}
				width={width}
				defaultLanguage="csharp"
				defaultValue={defaultValue()}
				theme="vs-dark"
				value={code}
				onChange={(value) => handleEditorChange(value)}
			/>
		</div>
	);
};

export { CodeEditor };
