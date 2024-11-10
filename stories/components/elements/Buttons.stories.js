import React from 'react';
import { fn } from '@storybook/test';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  PlusIcon,
} from '@heroicons/react/20/solid';

// Import all button variants
import PrimaryButton from '../../../src/components/buttons/PrimaryButton';
import SecondaryButton from '../../../src/components/buttons/SecondaryButton';
import Button from '../../../src/components/buttons/Button'; // Corrected import

// Default export consolidating all button stories
export default {
  title: 'Components/Elements/Buttons',
  component: Button,
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
      defaultValue: 'button',
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
  args: { onClick: fn() },
};

// Templates for different button types
const PrimaryTemplate = (args) => <PrimaryButton {...args} />;
const SecondaryTemplate = (args) => <SecondaryButton {...args} />;
const IconButtonTemplate = (args) => <Button {...args} />; // Using Button for Icon Buttons

// ==================== Primary Button Stories ====================

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  label: 'Button text',
  id: 'actionButton',
};

export const PrimaryExtraSmall = PrimaryTemplate.bind({});
PrimaryExtraSmall.args = {
  label: 'Button text',
  size: 'xs',
  id: 'xsBtn',
};

export const PrimarySmall = PrimaryTemplate.bind({});
PrimarySmall.args = {
  label: 'Button text',
  size: 'sm',
  id: 'smBtn',
};

export const PrimaryMedium = PrimaryTemplate.bind({});
PrimaryMedium.args = {
  label: 'Button text',
  size: 'md',
  id: 'mdBtn',
};

export const PrimaryLarge = PrimaryTemplate.bind({});
PrimaryLarge.args = {
  label: 'Button text',
  size: 'lg',
  id: 'lgBtn',
};

export const PrimaryExtraLarge = PrimaryTemplate.bind({});
PrimaryExtraLarge.args = {
  label: 'Button text',
  size: 'xl',
  id: 'xlBtn',
};

export const PrimaryCustomTheme = PrimaryTemplate.bind({});
PrimaryCustomTheme.args = {
  label: 'Custom Themed Button',
  size: 'xl',
  id: 'customButton',
  theme: {
    base: 'font-semibold',
    background: 'bg-megadrive-screen text-white',
    hoverBackground: 'hover:bg-matt-purple',
    focusOutline:
      'focus:ring-matt-purple focus:outline-none focus:ring-2 focus:ring-offset-1',
    rounded: 'rounded-full',
    shadow: 'shadow-sm',
  },
  className: 'my-custom-class',
};

// ==================== Secondary Button Stories ====================

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  label: 'Button text',
  id: 'actionButton',
};

export const SecondaryExtraSmall = SecondaryTemplate.bind({});
SecondaryExtraSmall.args = {
  label: 'Button text',
  size: 'xs',
  id: 'xsBtn',
};

export const SecondarySmall = SecondaryTemplate.bind({});
SecondarySmall.args = {
  label: 'Button text',
  size: 'sm',
  id: 'smBtn',
};

export const SecondaryMedium = SecondaryTemplate.bind({});
SecondaryMedium.args = {
  label: 'Button text',
  size: 'md',
  id: 'mdBtn',
};

export const SecondaryLarge = SecondaryTemplate.bind({});
SecondaryLarge.args = {
  label: 'Button text',
  size: 'lg',
  id: 'lgBtn',
};

export const SecondaryExtraLarge = SecondaryTemplate.bind({});
SecondaryExtraLarge.args = {
  label: 'Button text',
  size: 'xl',
  id: 'xlBtn',
};

export const SecondaryCustomTheme = SecondaryTemplate.bind({});
SecondaryCustomTheme.args = {
  label: 'Custom Themed Button',
  size: 'xl',
  id: 'customButton',
  theme: {
    base: 'font-semibold',
    background: 'bg-indigo-50 text-indigo-700',
    hoverBackground: 'hover:bg-indigo-100',
    focusOutline: '',
    rounded: '',
    shadow: 'shadow-sm',
  },
  className: 'my-custom-class',
};

// ==================== Icon Button Stories ====================

export const LeadingIcon = IconButtonTemplate.bind({});
LeadingIcon.args = {
  label: 'Leading Icon Button',
  id: 'leadingIconButton',
  leadingIcon: <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />,
};

export const TrailingIcon = IconButtonTemplate.bind({});
TrailingIcon.args = {
  label: 'Trailing Icon Button',
  id: 'trailingIconButton',
  trailingIcon: <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />,
};

export const BothIcons = IconButtonTemplate.bind({});
BothIcons.args = {
  label: 'Both Icons Button',
  id: 'bothIconsButton',
  leadingIcon: <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />,
  trailingIcon: <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />,
};

export const CircularIconButton = IconButtonTemplate.bind({});
CircularIconButton.args = {
  label: 'Add', // Accessible label
  id: 'circularIconButton',
  leadingIcon: <PlusIcon className="h-5 w-5" aria-hidden="true" />,
  iconOnly: true, // Enable icon-only
  theme: {
    background: 'bg-bright-light-green text-white',
    hover: 'hover:bg-ragweed',
    rounded: 'rounded-full',
    focusOutline:
      'focus:ring-ragweed focus:outline-none focus:ring-2 focus:ring-offset-1',
    additional: 'w-10 h-10', // Fixed width and height for circular shape
  },
};
