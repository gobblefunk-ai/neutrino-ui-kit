import React from 'react';
import SimpleLandingPage from '../../src/pages/SimpleLandingPage';

export default {
  title: 'Example/SimpleLandingPage',
  component: SimpleLandingPage,
  parameters: {
    docs: {
      disable: true,
    },
  },
  args: {},
};

const Template = (args) => <SimpleLandingPage {...args} />;

export const Story = Template.bind({});
Story.args = {};
