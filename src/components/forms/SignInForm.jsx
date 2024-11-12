import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import PrimaryButton from '../buttons/PrimaryButton';

/**
 * SignInForm Component
 * A highly customizable sign-in form component for UI kits.
 */
export const SignInForm = ({
  logoSrc,
  formTitle,
  formAction,
  imageStyles,
  formStyles,
  inputFocusStyles,
  backgroundStyles,
  buttonStyles,
  links,
}) => {
  return (
    <div
      className={`flex flex-col flex-1 justify-center sm:px-6 lg:px-8 py-12 min-h-full ${backgroundStyles.container}`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Your Company"
          src={logoSrc}
          className={`mx-auto w-auto h-10 ${imageStyles}`}
        />
        <h2 className="mt-6 font-bold text-2xl/9 text-center text-gray-900 tracking-tight">
          {formTitle}
        </h2>
      </div>

      <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-[480px]">
        <div
          className={`bg-white shadow px-6 sm:px-12 py-12 sm:rounded-lg ${formStyles}`}
        >
          <form action={formAction} method="POST" className="space-y-6">
            {/* Email Input */}
            <div>
              <div className="mt-2">
                <FormInput
                  label="Email address"
                  id="email"
                  type="email"
                  name="email"
                  placeholder={links.emailPlaceholder || 'you@example.com'}
                  required
                  autoComplete="email"
                  className={`block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 ${inputFocusStyles} ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6`}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="mt-2">
                <FormInput
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder={links.passwordPlaceholder || '••••••••'}
                  required
                  autoComplete="current-password"
                  className={`block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 ${inputFocusStyles} ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6`}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="border-gray-300 rounded focus:ring-indigo-600 w-4 h-4 text-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-3 text-gray-900 text-sm/6"
                >
                  {links.rememberMe || 'Remember me'}
                </label>
              </div>

              <div className="text-sm/6">
                <a
                  href={links.forgotPassword || '#'}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {links.forgotPasswordText || 'Forgot password?'}
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <PrimaryButton
                type="submit"
                label={links.submitButtonLabel || 'Sign In'}
                className="w-full"
                theme={buttonStyles}
              />
            </div>
          </form>

          {/* Divider */}
          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="border-gray-200 border-t w-full" />
            </div>
            <div className="relative flex justify-center font-medium text-sm/6">
              <span className="bg-white px-6 text-gray-900">
                {links.orContinueWith || 'Or continue with'}
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="gap-4 grid grid-cols-2 mt-6">
            {links.social &&
              links.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.href}
                  className={`flex justify-center items-center gap-3 bg-white hover:bg-gray-50 shadow-sm px-3 py-2 rounded-md ring-1 ring-gray-300 focus-visible:ring-transparent ring-inset w-full font-semibold text-gray-900 text-sm ${socialLink.className}`}
                >
                  {socialLink.icon}
                  <span className="font-semibold text-sm/6">
                    {socialLink.label}
                  </span>
                </a>
              ))}
          </div>

          {/* Sign Up Link */}
          <p className="mt-10 text-center text-gray-500 text-sm/6">
            {links.signUpPrompt || 'Not a member?'}{' '}
            <a
              href={links.signUpHref || '#'}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {links.signUpText || 'Start a 14 day free trial'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Default Props for SignInForm
SignInForm.defaultProps = {
  imageStyles: '',
  formStyles: '',
  inputFocusStyles: 'focus:ring-indigo-600',
  backgroundStyles: {
    container: '',
  },
  buttonStyles: {
    background: 'bg-indigo-600 text-white',
    hover: 'hover:bg-indigo-500',
    focus: 'focus:ring-indigo-600',
  },
  links: {
    emailPlaceholder: 'you@example.com',
    passwordPlaceholder: '••••••••',
    rememberMe: 'Remember me',
    forgotPassword: '#',
    forgotPasswordText: 'Forgot password?',
    submitButtonLabel: 'Sign In',
    orContinueWith: 'Or continue with',
    social: [
      {
        href: '#',
        label: 'Google',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
        ),
        className: '',
      },
      {
        href: '#',
        label: 'GitHub',
        icon: (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="fill-slate-900 size-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        ),
        className: '',
      },
    ],
    signUpPrompt: 'Not a member?',
    signUpHref: '#',
    signUpText: 'Start a 14 day free trial',
  },
};

// Prop Types for SignInForm
SignInForm.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  formAction: PropTypes.string.isRequired,
  imageStyles: PropTypes.string,
  formStyles: PropTypes.string,
  inputFocusStyles: PropTypes.string,
  backgroundStyles: PropTypes.shape({
    container: PropTypes.string,
  }),
  buttonStyles: PropTypes.shape({
    background: PropTypes.string,
    hover: PropTypes.string,
    focus: PropTypes.string,
  }),
  links: PropTypes.shape({
    emailPlaceholder: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    rememberMe: PropTypes.string,
    forgotPassword: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    orContinueWith: PropTypes.string,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        className: PropTypes.string,
      }),
    ),
    signUpPrompt: PropTypes.string,
    signUpHref: PropTypes.string,
    signUpText: PropTypes.string,
  }),
};

export default SignInForm;
