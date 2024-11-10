import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component
 *
 * This is a versatile and customizable button component designed to accommodate a wide range of use cases.
 * It supports different sizes, theming options, and can include leading and trailing icons.
 * The component is accessible, supporting icon-only buttons with proper focus styles and screen reader labels.
 * It's built to be easily integrated into any design system or application, allowing for extensive customization.
 */
const Button = ({
  // Structural props
  id,
  type,
  onClick,

  // Content props
  label,
  leadingIcon,
  trailingIcon,

  // Styling props
  size,
  theme,
  className,
  iconOnly,
  ...props
}) => {
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-base',
  };

  // Fallback to 'md' if an unsupported size is provided
  const currentSizeClasses = sizeClasses[size] || sizeClasses.md;

  const defaultTheme = {
    // Base typography and font styles
    base: 'font-semibold',

    // Hover state classes
    hover: '',

    // Focus state classes
    focus: '',

    // Border radius classes
    rounded: 'rounded-md',

    // Any additional custom classes
    additional: '',

    // Background and text color classes
    background: 'bg-indigo-600 text-white',

    // Shadow effect classes
    shadow: 'shadow-sm',

    // Background classes for hover state
    hoverBackground: 'hover:bg-indigo-500',

    // Outline and ring classes for focus state
    focusOutline:
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',

    // Flex display classes for alignment
    flex: 'inline-flex',

    // Gap between flex items
    gap: 'gap-x-1.5',
  };

  // Merge the default theme with the provided custom theme
  const mergedTheme = { ...defaultTheme, ...theme };

  // Destructure mergedTheme for easier access to theme properties
  const {
    base,
    hover,
    focus,
    rounded,
    additional,
    background,
    shadow,
    hoverBackground,
    focusOutline,
    flex: themeFlex,
    gap,
  } = mergedTheme;

  // Helper function to combine class names, filtering out falsy values
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  // Determine the flex classes based on whether the button has icons or is icon-only
  const flexClasses = (() => {
    if (iconOnly) {
      // For icon-only buttons, center the icon
      return 'inline-flex items-center justify-center';
    } else if (leadingIcon || trailingIcon) {
      // For buttons with icons and label, use flex to align items
      return `${themeFlex} items-center ${gap}`;
    }
    // For buttons without icons, no additional flex classes are needed
    return '';
  })();

  // Combine all the classes into a single string for the button
  const combinedClassName = classNames(
    rounded,
    base,
    currentSizeClasses,
    background,
    hoverBackground,
    hover,
    shadow,
    focusOutline,
    focus,
    additional,
    flexClasses,
    iconOnly ? 'p-3' : '',
    className,
  );

  /**
   * Renders an icon with adjusted class names for consistent sizing
   * @param {ReactElement} icon - The icon component to render
   * @returns {ReactElement|null} The rendered icon component or null if no icon
   */
  const renderIcon = (icon) => {
    if (!icon) return null;
    return React.cloneElement(icon, {
      className: classNames(icon.props.className, 'h-5 w-5'),
    });
  };

  // Render the button content based on whether it's icon-only or has label and icons
  return (
    <button
      id={id}
      type={type}
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {iconOnly ? (
        <>
          {/* Screen-reader-only label for accessibility */}
          <span className="sr-only">{label}</span>
          {/* Render the leading or trailing icon */}
          <span className="flex justify-center items-center">
            {renderIcon(leadingIcon || trailingIcon)}
          </span>
        </>
      ) : (
        <>
          {/* Render leading icon if provided */}
          {leadingIcon && (
            <span className="icon-leading">{renderIcon(leadingIcon)}</span>
          )}
          {/* Display the button label */}
          {label}
          {/* Render trailing icon if provided */}
          {trailingIcon && (
            <span className="icon-trailing">{renderIcon(trailingIcon)}</span>
          )}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Specifies the button's type attribute.
   * Determines the default behavior when the button is clicked.
   * Accepts 'submit', 'reset', or 'button'.
   */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),

  /**
   * The text content displayed inside the button.
   * Required for accessibility, even if the button is icon-only.
   */
  label: PropTypes.string.isRequired,

  /**
   * Defines the size of the button.
   * Options are 'xs', 'sm', 'md', 'lg', or 'xl'.
   * Each size applies different padding and font size.
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * The HTML id attribute for the button element.
   * Useful for associating the button with a label or for testing.
   */
  id: PropTypes.string,

  /**
   * Custom theme classes to override or extend the default styling.
   * Allows for extensive customization of the button's appearance.
   */
  theme: PropTypes.shape({
    /** Base typography and font styles */
    base: PropTypes.string,

    /** Classes applied when the button is hovered over */
    hover: PropTypes.string,

    /** Classes applied when the button is focused */
    focus: PropTypes.string,

    /** Border radius classes for rounding the button's corners */
    rounded: PropTypes.oneOf([
      'rounded',
      'rounded-md',
      'rounded-lg',
      'rounded-full',
    ]),

    /** Additional custom classes for further styling */
    additional: PropTypes.string,

    /** Background color or gradient classes */
    background: PropTypes.string,

    /** Shadow effect classes */
    shadow: PropTypes.string,

    /** Background classes applied on hover */
    hoverBackground: PropTypes.string,

    /** Outline and ring classes applied on focus */
    focusOutline: PropTypes.string,

    /** Flex display classes for content alignment */
    flex: PropTypes.string,

    /** Classes defining the gap between flex items */
    gap: PropTypes.string,
  }),

  /**
   * Additional CSS classes to apply to the button.
   * Can be used to override or extend styles.
   */
  className: PropTypes.string,

  /**
   * An optional icon component to display before the button label.
   * Accepts a React element (e.g., an SVG icon).
   */
  leadingIcon: PropTypes.element,

  /**
   * An optional icon component to display after the button label.
   * Accepts a React element (e.g., an SVG icon).
   */
  trailingIcon: PropTypes.element,

  /**
   * If true, renders the button as an icon-only button.
   * The label is visually hidden but remains for accessibility.
   */
  iconOnly: PropTypes.bool,

  /**
   * Optional click event handler.
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  size: 'md',
  id: '',
  theme: {},
  className: 'focus:outline-none focus:ring-2 focus:ring-offset-2',
  leadingIcon: null,
  trailingIcon: null,
  iconOnly: false,
  onClick: undefined,
};

export default Button;
