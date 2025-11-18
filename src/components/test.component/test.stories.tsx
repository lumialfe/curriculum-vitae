import { Meta, StoryObj } from '@storybook/react';
import { TestComponent } from '@/src';

const meta: Meta<typeof TestComponent> = {
  title: 'Components/TestComponent',
  component: TestComponent,
  args: {
				title: 'Hello World!'
		}
};

export default meta;

type Story = StoryObj<typeof TestComponent>;

export const Default: Story = {
  args: {
				// You can override default args here if needed
		},
};