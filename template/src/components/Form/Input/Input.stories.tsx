import { Input } from '.';

export default {
  title: 'Components/Form/Input',
  component: Input
};

export const Default = ({ placeholder = 'Type something', label = '' }) => (
  <Input placeholder={placeholder} label={label} />
);

export const WithLabel = ({ placeholder = 'Jane', label = 'First name' }) => (
  <Input placeholder={placeholder} label={label} />
);
