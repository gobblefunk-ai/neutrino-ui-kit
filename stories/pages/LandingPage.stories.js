import React from 'react';
import LandingPage from '../../src/pages/LandingPage';

export default {
  title: 'Example/LandingPage',
  component: LandingPage,
  parameters: {
    docs: {
      disable: true,
    },
  },
  args: {},
};

const Template = (args) => <LandingPage {...args} />;

export const Story = Template.bind({});
Story.args = {};
