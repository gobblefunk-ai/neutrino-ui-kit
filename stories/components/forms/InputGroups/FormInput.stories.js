import React, { useState } from 'react';
import FormInput from '../../../../src/components/forms/FormInput';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Components/Forms/Input Groups/Form Input',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text to display as the label for the input field.',
      defaultValue: 'Name',
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the input element.',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the input element.',
      defaultValue: 'name',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'url', 'tel'],
      description: 'The type of input.',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed inside the input.',
      defaultValue: 'Jon Doe',
    },
    value: {
      control: 'text',
      description: 'The current value of the input.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when the input value changes.',
    },
    className: {
      control: 'text',
      description: 'Additional class names for the input element.',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional class names for the label element.',
    },
    wrapperClassName: {
      control: 'text',
      description: 'Additional class names for the wrapper div.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when set to true.',
      defaultValue: false,
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required in forms.',
      defaultValue: false,
    },
    inputProps: {
      control: 'object',
      description: 'Additional props to pass directly to the input element.',
    },
    inputStyles: {
      control: 'object',
      description: 'Inline styles for the input element.',
    },
    labelStyles: {
      control: 'object',
      description: 'Inline styles for the label element.',
    },
    wrapperStyles: {
      control: 'object',
      description: 'Inline styles for the wrapper div.',
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the input field.',
    },
    errorText: {
      control: 'text',
      description:
        'Error text displayed below the input field when in error state.',
    },
    error: {
      control: 'boolean',
      description: 'Indicates whether the input is in an error state.',
      defaultValue: false,
    },
    icon: {
      control: 'element',
      description: 'Icon component to display inside the input field.',
    },
    hideLabel: {
      control: 'boolean',
      description:
        'Hides the label visually but keeps it accessible to screen readers.',
      defaultValue: false,
    },
    ariaDescribedby: {
      control: 'text',
      description:
        'The id of the element that describes the input (for accessibility).',
    },
  },
};

// Template for creating stories with dynamic args
const Template = (args) => {
  // Local state to manage the input value
  const [value, setValue] = useState(args.value || '');

  // Handler for input changes
  const handleChange = (e) => {
    setValue(e.target.value);
    if (args.onChange) args.onChange(e);
  };

  return <FormInput {...args} value={value} onChange={handleChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Jon Doe',
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Name',
  placeholder: 'Jon Doe',
  disabled: true,
};

// Required field
export const Required = Template.bind({});
Required.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  required: true,
};

// Password input
export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: '••••••••',
  type: 'password',
};

// Custom Styling
export const CustomStyling = Template.bind({});
CustomStyling.args = {
  label: 'Username',
  placeholder: 'john_doe',
  className: 'bg-yellow-100 border-yellow-500',
  labelClassName: 'text-yellow-700',
  wrapperClassName: 'w-96',
  inputStyles: { borderColor: '#facc15' },
  labelStyles: { color: '#facc15' },
  wrapperStyles: { maxWidth: '300px' },
};

// With Additional Props
export const WithAdditionalProps = Template.bind({});
WithAdditionalProps.args = {
  label: 'Website',
  placeholder: 'https://example.com',
  type: 'url',
  inputProps: {
    pattern: 'https?://.+',
    title: 'Enter a valid URL starting with http:// or https://',
  },
};

// Recreating Tailwind Examples

// Input with label and help text
export const WithHelpText = Template.bind({});
WithHelpText.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  helpText: "We'll only use this for spam.",
  ariaDescribedby: 'email-description',
};

// Input with validation error
export const WithValidationError = Template.bind({});
WithValidationError.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  value: 'invalid-email',
  error: true,
  errorText: 'Not a valid email address.',
  ariaDescribedby: 'email-error',
  icon: (
    <ExclamationCircleIcon
      aria-hidden="true"
      className="h-5 w-5 text-red-500"
    />
  ),
};

// Email with hidden label
export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  hideLabel: true,
};
