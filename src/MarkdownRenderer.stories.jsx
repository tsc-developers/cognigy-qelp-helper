import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default {
  title: 'Components/MarkdownRenderer',
  component: MarkdownRenderer,
};

const Template = (args) => <MarkdownRenderer {...args} />;

export const HeadingAndParagraph = Template.bind({});
HeadingAndParagraph.args = {
  markdown: `# Hello World\nThis is a **bold** statement.`,
};

export const ListExample = Template.bind({});
ListExample.args = {
  markdown: `
- Item 1
- Item 2
- **Bold Item**
`,
};

export const LinkAndCode = Template.bind({});
LinkAndCode.args = {
  markdown: `
Here's a [link](https://example.com) and some \`inline code\`.

\`\`\`js
console.log("Hello Markdown!");
\`\`\`
`,
};

export const QuoteAndImage = Template.bind({});
QuoteAndImage.args = {
  markdown: `
> This is a blockquote.

![Alt Text](https://via.placeholder.com/150)
`,
};
