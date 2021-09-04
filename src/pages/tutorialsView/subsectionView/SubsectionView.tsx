import { MarkdownCompiler } from 'components/markdownCompiler';
import React from 'react';
import './SubsectionView.scss';

const tutorial = {
	title: 'Comments',
	description:
		'Comments constructions are used in most programming languages. They allow us to describe source code in natural language: making it clear and more readable. It can also be used to prevent execution when testing alternative code.',
	paragraphs: [
		{
			title: 'Single-line Comments',
			content: `Single-line comment begins with two forward slashes ( **//** ) and applies to the end of the current line. 
Any text in this area is ignored by C# compiler and will not be executed.

~~~csharp
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!"); // This is a single-line comment
            // This is also a single-line comment
        }
    }
}
~~~
`,
		},
		{
			title: 'Multi-line Comments',
			content: `Multi-line comment begins with **/\*** and ends with **\*/**. Any text between will not be executed.
            ~~~csharp
            using System;
            
            namespace ConsoleApp1
            {
                class Program
                {
                    static void Main(string[] args)
                    {
                        Console.WriteLine("Hello World!"); 
						/* 
                            This is a multi-line
                            comment
						*/
                    }
                }
            }
        ~~~`,
		},
		{
			title: 'XML Comments',
			content: `
            XML comment starts with three forward slashes ( **///** ) proceeded by an XML tag with its content. 
            Using these comments you can explain each part of your program more precisely and generate an XML document 
            describing the source code.
            For now, we will not be using many of these since we are going to keep our examples short, 
            but when you are writing a more complicated application, XML comments really come in handy.
            
            ~~~csharp
            using System;
            
            namespace ConsoleApp1
            {
                class Program{
                    
                    /// <remarks>This is a start method of our application</remarks> 
                    static void Main(string[] args)
                    {
                        Console.WriteLine("Hello World!");
                    }
                }
            }
        ~~~

        XML Comments tags you can use:

        + **<code>** - marking a multi-line piece of a comment as code
        + **<c>** - marking a piece of a comment as code
        + **<example>** - example of code use
        + **<exception>** - reference to an exception
        + **<include>** - reference to an external file included to documentation
        + **<list>** - marking an enumeration
        + **<para>** - marking a paragraph of text
        + **<param>** - description of the methods parameter
        + **<paramref>** - indication that the word in description references a parameter
        + **<permission>** - description of the accessibility level
        + **<remarks>** - description of a type member
        + **<returns>** - description of return value
        + **<see>** - reference to specific part of documentation
        + **<seealso>** - reference to specific part of documentation
        + **<summary>** - description of a type or type member
        + **<typeparam>** - description of generic type
        + **<typeparamref>** - addition information about generic type
        + **<value>** - description of a value
        `,
		},
	],
};

const SubsectionView = () => {
	return (
		<div>
			<h3>{tutorial.title}</h3>
			<p className="description">{tutorial.description}</p>
			<div>
				{tutorial.paragraphs.map((paragraph) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div className="paragraph">
							<h4>{paragraph.title}</h4>
							<MarkdownCompiler markdown={paragraph.content} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { SubsectionView };
