import React from 'react';
import { MarkdownCompiler } from 'components/markdownCompiler';
import './Examples.scss';

interface IExamples {
	input: string;
	output: string;
}

const markLine = ({ input, output }: { input: string; output: string }) => {
	return input === output ? 'marked' : '';
};

const asCode = (code: string) => {
	return `~~~
${code}
~~~`;
};
const mergeIntoCodeBlock = (examples: { input: string; output: string }[]): { inputs: string; outputs: string } => {
	const inputs: string[] = [];
	const outputs: string[] = [];

	examples &&
		examples.map(({ input, output }) => {
			inputs.push(input);
			outputs.push(output);
		});

	return {
		inputs: asCode(inputs.join('\n')),
		outputs: asCode(outputs.join('\n')),
	};
};

const Examples = ({ examples }: { examples: IExamples[] }) => {
	const { inputs, outputs } = mergeIntoCodeBlock(examples);

	return (
		<div className="examplesContainer">
			<div className="example">
				<div className="example__input">
					<span>Example input:</span>
					<MarkdownCompiler markdown={inputs} />
				</div>
				<div className="example__output">
					<span>Expected output:</span>
					<MarkdownCompiler markdown={outputs} />
				</div>
			</div>
			{/* {examples.map(({ input, output }, key) => (
				<div key={key} className="example">
					<div className={['example__input', markLine({ input, output })].join(' ')}>{input}</div>
					<div className={['example__output', markLine({ input, output })].join(' ')}>{output}</div>
				</div>
			))} */}
		</div>
	);
};

export { Examples };
