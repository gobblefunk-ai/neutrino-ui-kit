import React from 'react';
import Container from '../../../src/components/containers/Container';

export default {
  title: 'Components/Containers/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive container component with centered alignment and constrained maximum width. Use it to wrap content that should appear centered and organized on the page.',
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

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div class="h-screen bg-bleached-silk"></div>,
};

export const Empty = Template.bind({});
Empty.args = {
  children: null,
};
