import React from 'react';

import Pricing from '../../src/pages/Pricing';

export default {
  title: 'Example/Pricing',
  component: Pricing,
  args: {},
};

const Template = (args) => <Pricing {...args} />;

export const Story = Template.bind({});
Story.args = {};
