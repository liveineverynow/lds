import React from 'react';

import { Template } from './Template';

export default {
  title: 'Example/Template',
  component: Template,
};

const T = (args) => <Template {...args} />;

export const Normal = T.bind({});
Normal.args = {
    bold: false
};

export const Bolded = T.bind({});
Bolded.args = {
    bold: true
};
