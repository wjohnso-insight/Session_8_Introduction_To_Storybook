import React from 'react'

import { TextInput } from './TextInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'TextInput',
    component: TextInput
}

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholderText: "Please enter text",
    hasInputFunction: () => console.log('Primary input detected...')
};

export const BackgroundOnInput = Template.bind({});
BackgroundOnInput.args = {
    placeholderText: "Add text to change background color",
}