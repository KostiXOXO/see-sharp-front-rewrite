import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { default as Md } from 'react-markdown';
import './MarkdownCompiler.scss';

interface IProps {
	markdown: string;
}

const components = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	/* @ts-ignore */
	// eslint-disable-next-line react/prop-types
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '');
		return !inline && match ? (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language={match[1]}
				PreTag="div"
				// eslint-disable-next-line react/no-children-prop
				children={String(children).replace(/\n$/, '')}
				{...props}
			/>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

const MarkdownCompiler = ({ markdown }: IProps) => {
	let isCode = false;
	return (
		// <Md
		// 	// eslint-disable-next-line react/no-children-prop
		// 	children={markdown}
		// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// 	/* @ts-ignore */
		// 	// eslint-disable-next-line react/prop-types
		// 	components={components}
		// />

		<div className="mdContent">
			<Md
				// eslint-disable-next-line react/no-children-prop
				children={markdown
					.split('    ')
					.map((item) => {
						isCode = item[0] === '~' ? !isCode : isCode;
						return isCode ? '   ' + item : item;
					})
					.join('')}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				/* @ts-ignore */
				components={components}
			/>
		</div>
	);
};

export { MarkdownCompiler };
