import React from 'react';
import BoxContainer from '../../../src/components/containers/BoxContainer';

export default {
  title: 'Components/Containers/Box Container',
  component: BoxContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive container with padding, limited maximum width, and a subtle shadow. Use it for boxed content with consistent spacing.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content or components to render inside the container.',
    },
  },
};

const Template = (args) => <BoxContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div class="h-screen bg-bleached-silk"></div>,
};

export const Empty = Template.bind({});
Empty.args = {
  children: null,
};
