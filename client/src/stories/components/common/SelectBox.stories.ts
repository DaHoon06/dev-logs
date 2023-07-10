import { Options, SelectBox } from '@components/common/selectbox/SelectBox';
import { Meta, StoryObj } from '@storybook/react';

const initialState: Options[] = [
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
];

const meta: Meta<typeof SelectBox> = {
  title: 'components/common/SelectBox',
  component: SelectBox,
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Select: Story = {
  args: {
    options: initialState,
  },
};
