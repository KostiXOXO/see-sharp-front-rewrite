import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { default as Md } from 'react-markdown';
import './MarkdownCompiler.scss';
import { clrConsole } from 'styles/theme';

interface IProps {
	markdown: string;
}

const components = {
	code({ children }: { children: any }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language={'csharp'}
				showLineNumbers
				PreTag="div"
				customStyle={{ background: clrConsole }}
			>
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		);
	},
};

const MarkdownCompiler = ({ markdown }: IProps) => {
	return (
		<Md className="mdContent" components={components}>
			{markdown}
		</Md>
	);
};

export { MarkdownCompiler };
