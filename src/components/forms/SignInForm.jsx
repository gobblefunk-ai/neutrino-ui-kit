import React from 'react';
import PropTypes from 'prop-types';

export const SignInForm = ({ logoSrc, formTitle, formAction }) => {
  return (
    <div className="flex flex-col flex-1 justify-center sm:px-6 lg:px-8 py-12 min-h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img alt="Your Company" src={logoSrc} className="mx-auto w-auto h-10" />
        <h2 className="mt-6 font-bold text-2xl/9 text-center text-gray-900 tracking-tight">
          {formTitle}
        </h2>
      </div>

      <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-[480px]">
        <div className="bg-white shadow px-6 sm:px-12 py-12 sm:rounded-lg">
          <form action={formAction} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                />
              </div>
            </div>

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
                  Remember me
                </label>
              </div>

              <div className="text-sm/6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center bg-indigo-600 hover:bg-indigo-500 shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm/6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="border-gray-200 border-t w-full" />
            </div>
            <div className="relative flex justify-center font-medium text-sm/6">
              <span className="bg-white px-6 text-gray-900">
                Or continue with
              </span>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-2 mt-6">
            <a
              href="#"
              className="flex justify-center items-center gap-3 bg-white hover:bg-gray-50 shadow-sm px-3 py-2 rounded-md ring-1 ring-gray-300 focus-visible:ring-transparent ring-inset w-full font-semibold text-gray-900 text-sm"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                <path d="M12.0003 4.75..." fill="#EA4335" />
                <path d="M23.49 12.275..." fill="#4285F4" />
                <path d="M5.26498 14.2949..." fill="#FBBC05" />
                <path d="M12.0004 24.0001..." fill="#34A853" />
              </svg>
              <span className="font-semibold text-sm/6">Google</span>
            </a>

            <a
              href="#"
              className="flex justify-center items-center gap-3 bg-white hover:bg-gray-50 shadow-sm px-3 py-2 rounded-md ring-1 ring-gray-300 focus-visible:ring-transparent ring-inset w-full font-semibold text-gray-900 text-sm"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 fill-[#24292F]"
              >
                <path
                  d="M10 0C4.477 0 0 4.484..."
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-sm/6">GitHub</span>
            </a>
          </div>

          <p className="mt-10 text-center text-gray-500 text-sm/6">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  formAction: PropTypes.string.isRequired,
};
