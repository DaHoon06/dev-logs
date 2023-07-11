import { CodeBlock } from '@components/common/codeblock/CodeBlock';
import { Meta, StoryObj } from '@storybook/react';

const initialState = {
  _id: 1,
  items: [
    { itemId: 1, answer: '답변 1' },
    { itemId: 2, answer: '답변 2' },
    { itemId: 3, answer: '답변 3' },
    { itemId: 4, answer: '답변 4' },
  ],
};

const jsonToString = JSON.stringify(initialState, null, '\t');

const meta: Meta<typeof CodeBlock> = {
  title: 'components/common/CodeBlock',
  component: CodeBlock,
  argTypes: {
    label: {
      control: 'string',
      description: 'code block top title',
    },
    code: {
      control: 'string',
      description: 'code block body',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const CodeBlockComponent: Story = {
  args: {
    label: 'output.json',
    code: jsonToString,
  },
};
