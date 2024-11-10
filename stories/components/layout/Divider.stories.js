import React from 'react';
import Divider from '../../../src/components/layout/Divider';
import {
  PlusIcon,
  PencilIcon,
  PaperClipIcon,
  ChatBubbleBottomCenterTextIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

export default {
  title: 'Components/Layout/Dividers',
  component: Divider,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      },
      description: 'Alignment of the content over the divider line.',
    },
    lineColor: {
      control: 'text',
      description: 'Tailwind CSS class for the line color.',
    },
    containerClassName: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for the container wrapper.',
    },
    itemsCenter: {
      control: 'boolean',
      description: "Whether to apply 'items-center' class to the container.",
    },
    children: {
      control: false,
    },
  },
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <span className="bg-white px-2 text-sm text-gray-500">Continue</span>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <span className="bg-white px-2 text-gray-500">
      <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
    </span>
  ),
};

export const LabelOnLeft = Template.bind({});
LabelOnLeft.args = {
  align: 'start',
  children: (
    <span className="bg-white pr-2 text-sm text-gray-500">Continue</span>
  ),
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  children: (
    <span className="bg-white px-3 text-base font-semibold text-gray-900">
      Projects
    </span>
  ),
};

export const TitleOnLeft = Template.bind({});
TitleOnLeft.args = {
  align: 'start',
  children: (
    <span className="bg-white pr-3 text-base font-semibold text-gray-900">
      Projects
    </span>
  ),
};

export const WithButton = Template.bind({});
WithButton.args = {
  children: (
    <button
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      <PlusIcon
        aria-hidden="true"
        className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
      />
      Button text
    </button>
  ),
};

export const WithTitleAndButton = Template.bind({});
WithTitleAndButton.args = {
  align: 'between',
  itemsCenter: true,
  children: (
    <>
      <span className="bg-white pr-3 text-base font-semibold text-gray-900">
        Projects
      </span>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <PlusIcon
          aria-hidden="true"
          className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
        />
        <span>Button text</span>
      </button>
    </>
  ),
};

export const WithToolbar = Template.bind({});
WithToolbar.args = {
  children: (
    <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Edit</span>
        <PencilIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Attachment</span>
        <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Annotate</span>
        <ChatBubbleBottomCenterTextIcon
          aria-hidden="true"
          className="h-5 w-5"
        />
      </button>
      <button
        type="button"
        className="relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </span>
  ),
};
