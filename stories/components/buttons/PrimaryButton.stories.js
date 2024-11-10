import { fn } from '@storybook/test';
import PrimaryButton from '../../../src/components/buttons/PrimaryButton';

export default {
  title: 'Components/Buttons/Primary',
  component: PrimaryButton,
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

export const Primary = {
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
      background: 'bg-megadrive-screen text-white',
      hoverBackground: 'hover:bg-matt-purple',
      focusOutline:
        'focus:ring-matt-purple focus:outline-none focus:ring-2 focus:ring-offset-1',
      rounded: 'rounded-full',
      shadow: 'shadow-sm',
    },
    className: 'my-custom-class',
  },
};
