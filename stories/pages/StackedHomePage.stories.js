import React from 'react';

import StackedHomePage from '../../src/pages/StackedHomePage';

export default {
  title: 'Example/StackedHomePage',
  component: StackedHomePage,
  args: {},
};

const Template = (args) => <StackedHomePage {...args} />;

export const Story = Template.bind({});
Story.args = {};
