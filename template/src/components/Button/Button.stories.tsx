import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button
};

export const Default = (props: ButtonProps) => (
  <Button {...props}>Click me</Button>
);
