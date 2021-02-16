import React from 'react';
import { Select, SelectProps } from '.';

export default {
  title: 'Components/Form/Select',
  component: Select,
  decorators: [
    (storyFn: any) => <div style={{ height: '15rem' }}>{storyFn()}</div>
  ]
};

export const Default = ({
  options = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' }
  ],
  placeholder = 'Select an option',
  ...props
}: SelectProps) => <Select {...{ options, placeholder, ...props }} />;
