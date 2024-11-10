import React from 'react';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  PlusIcon,
} from '@heroicons/react/20/solid';
import { action } from '@storybook/addon-actions';
import IconButton from '../../../src/components/buttons/IconButton';
import Button from '../../../src/components/buttons/Button';

export default {
  title: 'Components/Buttons/Icon Buttons',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      defaultValue: 'button',
    },
    label: {
      control: 'text',
      defaultValue: 'Button',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },
    id: {
      control: 'text',
      defaultValue: 'iconButton',
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
    theme: {
      control: 'object',
      defaultValue: {},
    },
    onClick: {
      action: 'clicked',
    },
    leadingIcon: {
      control: 'none',
    },
    trailingIcon: {
      control: 'none',
    },
    iconOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    onClick: action('clicked'),
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

const IconButtonTemplate = (args) => <IconButton {...args} />;

export const LeadingIcon = ButtonTemplate.bind({});
LeadingIcon.args = {
  label: 'Leading Icon Button',
  id: 'leadingIconButton',
  leadingIcon: <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />,
};

export const TrailingIcon = ButtonTemplate.bind({});
TrailingIcon.args = {
  label: 'Trailing Icon Button',
  id: 'trailingIconButton',
  trailingIcon: <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />,
  theme: {
    base: 'bg-indigo-600 text-white shadow-sm',
    hover: 'hover:bg-indigo-500',
    focus: 'focus:ring-indigo-600',
    rounded: 'rounded-md',
  },
};

export const BothIcons = ButtonTemplate.bind({});
BothIcons.args = {
  label: 'Both Icons Button',
  id: 'bothIconsButton',
  leadingIcon: <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />,
  trailingIcon: <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />,
  theme: {
    base: 'bg-purple-600 text-white shadow-lg inline-flex items-center gap-x-2',
    hover: 'hover:bg-purple-500',
    focus: 'focus:ring-purple-600',
    rounded: 'rounded-full',
  },
};

export const CircularIconButton = IconButtonTemplate.bind({});
CircularIconButton.args = {
  label: 'Add', // Accessible label
  id: 'circularIconButton',
  leadingIcon: <PlusIcon className="h-5 w-5" aria-hidden="true" />,
  iconOnly: true, // Enable icon-only
  theme: {
    base: 'bg-red-600 text-white shadow-sm',
    hover: 'hover:bg-red-500',
    focus: 'focus:ring-red-600',
    rounded: 'rounded-full',
    additional: 'w-10 h-10', // Fixed width and height for circular shape
  },
};
