import React from 'react';
import NarrowContainer from '../../../src/components/containers/NarrowContainer';

export default {
  title: 'Components/Containers/Narrow Container',
  component: NarrowContainer,
  parameters: {
    docs: {
      description: {
        component:
          'A responsive container with customizable maximum width, useful for layouts where content should appear within a narrower section.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content or components to render inside the container.',
    },
    maxWidth: {
      control: { type: 'text' },
      description:
        'Tailwind max-width class to set the container width (e.g., "max-w-md", "max-w-lg").',
    },
  },
};

const Template = (args) => <NarrowContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div class="h-screen bg-bleached-silk"></div>,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  children: (
    <div class="h-screen bg-bleached-silk">
      <h2 className="text-2xl font-semibold">Custom Width</h2>
      <p className="mt-2">
        This container has a custom width set to "max-w-xl".
      </p>
    </div>
  ),
  maxWidth: 'max-w-xl',
};
