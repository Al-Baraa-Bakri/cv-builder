import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ModernComponent } from '../lib/modern/modern.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ModernComponent> = {
  title: 'Example/Modern',
  component: ModernComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ModernComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
