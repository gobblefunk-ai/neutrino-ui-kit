import React from 'react';
import PropTypes from 'prop-types';

/**
 * FormInput Component
 *
 * Renders a customizable labeled input field with optional help text, error message, and icon.
 *
 * This component is designed to be flexible and reusable as part of a UI kit.
 * You can customize its appearance by overriding default styles such as colors,
 * fonts, and ring styles through various props. It supports different input types,
 * placeholders, and can be integrated with form handling logic.
 */
const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
  labelClassName,
  wrapperClassName,
  disabled,
  required,
  inputProps,
  inputStyles,
  labelStyles,
  wrapperStyles,
  helpText,
  errorText,
  error,
  icon,
  hideLabel,
  ariaDescribedby,
}) => {
  // Generate unique ID if not provided
  const inputId =
    id || name || `form-input-${Math.random().toString(36).substr(2, 9)}`;

  // Conditional CSS classes for the input element based on error state
  const inputBaseClass =
    'block w-full rounded-md py-1.5 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm';
  const inputErrorClass =
    'border-0 pr-10 ring-1 ring-inset ring-red-300 focus:ring-red-500 text-red-900 placeholder:text-red-300';
  const inputNormalClass =
    'border-0 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600';

  const defaultInputClass = `${inputBaseClass} ${
    error ? inputErrorClass : inputNormalClass
  } ${className}`;

  // Default CSS classes for the label element
  const defaultLabelClass = `block font-medium text-sm ${
    hideLabel ? 'sr-only' : 'text-gray-900'
  } ${labelClassName}`;

  // Default CSS classes for the wrapper div
  const defaultWrapperClass = `w-full ${wrapperClassName}`;

  return (
    <div className={defaultWrapperClass} style={wrapperStyles}>
      {label && (
        <label
          htmlFor={inputId}
          className={defaultLabelClass}
          style={labelStyles}
        >
          {label}
        </label>
      )}
      <div className={`relative ${label && !hideLabel ? 'mt-2' : ''}`}>
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={ariaDescribedby}
          className={defaultInputClass}
          style={inputStyles}
          {...inputProps}
        />
        {icon && (
          <div className="right-0 absolute inset-y-0 flex items-center pr-3 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {(helpText || errorText) && (
        <p
          id={ariaDescribedby}
          className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}
        >
          {error ? errorText : helpText}
        </p>
      )}
    </div>
  );
};

// Prop type validation for the FormInput component
FormInput.propTypes = {
  /** The text to display as the label for the input field */
  label: PropTypes.string,

  /** The unique identifier for the input element */
  id: PropTypes.string,

  /** The name attribute for the input element, useful for form submissions */
  name: PropTypes.string,

  /** The type of input (e.g., 'text', 'password', 'email') */
  type: PropTypes.string,

  /** Placeholder text displayed inside the input when it's empty */
  placeholder: PropTypes.string,

  /** The current value of the input, making it a controlled component */
  value: PropTypes.string,

  /** Callback function triggered when the input value changes */
  onChange: PropTypes.func,

  /** Additional class names for the input element to customize styling */
  className: PropTypes.string,

  /** Additional class names for the label element */
  labelClassName: PropTypes.string,

  /** Additional class names for the wrapper div */
  wrapperClassName: PropTypes.string,

  /** Disables the input when set to true */
  disabled: PropTypes.bool,

  /** Marks the input as required in forms */
  required: PropTypes.bool,

  /** Additional props to pass directly to the input element */
  inputProps: PropTypes.object,

  /** Inline styles for the input element */
  inputStyles: PropTypes.object,

  /** Inline styles for the label element */
  labelStyles: PropTypes.object,

  /** Inline styles for the wrapper div */
  wrapperStyles: PropTypes.object,

  /** Help text displayed below the input field */
  helpText: PropTypes.string,

  /** Error text displayed below the input field when in error state */
  errorText: PropTypes.string,

  /** Indicates whether the input is in an error state */
  error: PropTypes.bool,

  /** Icon component to display inside the input field */
  icon: PropTypes.element,

  /** Hides the label visually but keeps it accessible to screen readers */
  hideLabel: PropTypes.bool,

  /** The id of the element that describes the input (for accessibility) */
  ariaDescribedby: PropTypes.string,
};

// Default prop values for the FormInput component
FormInput.defaultProps = {
  label: 'Name',
  id: '',
  name: 'name',
  type: 'text',
  placeholder: 'Jon Doe',
  value: '',
  onChange: () => {},
  className: '',
  labelClassName: '',
  wrapperClassName: '',
  disabled: false,
  required: false,
  inputProps: {},
  inputStyles: {},
  labelStyles: {},
  wrapperStyles: {},
  helpText: '',
  errorText: '',
  error: false,
  icon: null,
  hideLabel: false,
  ariaDescribedby: '',
};

export default FormInput;
