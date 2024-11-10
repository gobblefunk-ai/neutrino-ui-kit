import React from 'react';
import ConstrainedContainer from '../../../src/components/containers/ConstrainedContainer';

export default {
  title: 'Components/Containers/Constrained Container',
  component: ConstrainedContainer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

const Template = (args) => <ConstrainedContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div class="h-screen bg-bleached-silk"></div>,
};

export const Empty = Template.bind({});
Empty.args = {
  children: null,
};
