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
    background: 'bg-endless-galaxy text-white',

    // Shadow effect classes
    shadow: 'shadow-sm',

    // Background classes for hover state
    hoverBackground: 'hover:bg-constellation-blue',

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
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  id: PropTypes.string,
  theme: PropTypes.shape({
    base: PropTypes.string,
    hover: PropTypes.string,
    focus: PropTypes.string,
    rounded: PropTypes.oneOf([
      'rounded',
      'rounded-md',
      'rounded-lg',
      'rounded-full',
    ]),
    additional: PropTypes.string,
    background: PropTypes.string,
    shadow: PropTypes.string,
    hoverBackground: PropTypes.string,
    focusOutline: PropTypes.string,
    flex: PropTypes.string,
    gap: PropTypes.string,
  }),
  className: PropTypes.string,
  leadingIcon: PropTypes.element,
  trailingIcon: PropTypes.element,
  iconOnly: PropTypes.bool,
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
