import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

/**
 * PrimaryButton Component
 *
 * This component renders a button styled as the primary action button.
 * It is intended to be used for main actions in your application.
 */
const PrimaryButton = ({ theme, ...props }) => {
  const primaryTheme = {
    base: 'font-semibold',
    background: 'bg-primary text-white',
    hoverBackground: 'hover:bg-primary-dark',
    focusOutline:
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    rounded: 'rounded-md',
    shadow: 'shadow-sm',
  };

  const mergedTheme = { ...primaryTheme, ...theme };

  return <Button theme={mergedTheme} {...props} />;
};

PrimaryButton.propTypes = {
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

PrimaryButton.defaultProps = {
  type: 'button',
  size: 'md',
  id: '',
  theme: {},
  className: '',
  leadingIcon: null,
  trailingIcon: null,
  iconOnly: false,
  onClick: undefined,
};

export default PrimaryButton;
