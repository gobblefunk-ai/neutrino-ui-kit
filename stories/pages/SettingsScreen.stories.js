import React from 'react';

import SettingsScreen from '../../src/pages/SettingsScreen';

export default {
  title: 'Example/SettingsScreen',
  component: SettingsScreen,
  args: {},
};

const Template = (args) => <SettingsScreen {...args} />;

export const Story = Template.bind({});
Story.args = {};
