import React from 'react';
import FullWidthContainer from '../../../src/components/containers/FullWidthContainer';

export default {
  title: 'Components/Containers/Full Width Container',
  component: FullWidthContainer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

const Template = (args) => <FullWidthContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="h-screen bg-bleached-silk"></div>,
};

export const Empty = Template.bind({});
Empty.args = {
  children: null,
};
