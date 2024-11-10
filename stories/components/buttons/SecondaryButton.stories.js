import { fn } from '@storybook/test';
import SecondaryButton from '../../../src/components/buttons/SecondaryButton';

export default {
  title: 'Components/Buttons/Secondary',
  component: SecondaryButton,
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
  args: { onClick: fn() },
};

export const Secondary = {
  args: {
    label: 'Button text',
    id: 'actionButton',
  },
};

export const ExtraSmall = {
  args: {
    label: 'Button text',
    size: 'xs',
    id: 'xsBtn',
  },
};

export const Small = {
  args: {
    label: 'Button text',
    size: 'sm',
    id: 'smBtn',
  },
};

export const Medium = {
  args: {
    label: 'Button text',
    size: 'md',
    id: 'mdBtn',
  },
};

export const Large = {
  args: {
    label: 'Button text',
    size: 'lg',
    id: 'lgBtn',
  },
};

export const ExtraLarge = {
  args: {
    label: 'Button text',
    size: 'xl',
    id: 'xlBtn',
  },
};

export const CustomTheme = {
  args: {
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
  },
};
