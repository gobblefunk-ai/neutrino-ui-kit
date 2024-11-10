import { SignInForm } from '../src/components/forms/SignInForm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Sign-In Form',
  component: SignInForm,
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    logoSrc:
      'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    formTitle: 'Sign In',
    formAction: 'asf',
    backgroundColor: '#e9e9e9',
  },
};
