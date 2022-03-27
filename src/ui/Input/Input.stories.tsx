import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Simple UI/Input',
  component: Input,
  argTypes: {
    variant: {
      options: ['simple', 'contained'],
      control: 'radio',
    },
    type: {
      options: [
        'text',
        'tel',
        'button',
        'checkbox',
        'color',
        'date',
        'email',
        'file',
        'hidden',
        'image',
        'datetime-local',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'time',
        'url',
        'week',
      ] as React.HTMLInputTypeAttribute[],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  disabled: false,
  variant: 'simple',
  value: 'Привет',
  type: 'text',
};
