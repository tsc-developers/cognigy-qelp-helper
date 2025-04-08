import React from 'react';
import { RedText } from './RedText';

export default {
  title: 'Webchat Plugin/RedText',
  component: RedText,
};

const Template = (args) => <RedText {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: {
    text: "This is red text"
  }
};
