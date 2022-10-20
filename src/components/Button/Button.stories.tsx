import { ComponentMeta } from "@storybook/react";
import Button from ".";


export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

// const Template = (args) => <Button {...args} />

export const Blue =  () => <Button color="bg-blue-500" />
export const Red =  () => <Button color="bg-red-500" />
