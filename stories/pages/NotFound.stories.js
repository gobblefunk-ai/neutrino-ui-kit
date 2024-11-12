import React from 'react';

import NotFound from '../../src/pages/NotFound';

export default {
  title: 'Example/PageNotFound',
  component: NotFound,
  args: {},
};

const Template = (args) => <NotFound {...args} />;

export const Story = Template.bind({});
Story.args = {};
