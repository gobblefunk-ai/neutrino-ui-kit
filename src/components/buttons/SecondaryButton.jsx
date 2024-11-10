import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

/**
 * SecondaryButton Component
 *
 * Renders a secondary-styled button with customizable label, size, and other props.
 * The theme is predefined for secondary styling but can be customized further via the `theme` prop.
 */
const SecondaryButton = ({ theme, ...props }) => {
  const secondaryTheme = {
    base: 'font-semibold',
    background:
      'bg-white text-purple-hyacinth ring-1 ring-inset ring-purple-hyacinth',
    hoverBackground: 'hover:bg-bleached-silk',
    focusOutline: '',
    rounded: 'rounded-md',
    shadow: 'shadow-sm',
  };

  const mergedTheme = { ...secondaryTheme, ...theme };

  return <Button theme={mergedTheme} {...props} />;
};

SecondaryButton.propTypes = {
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

SecondaryButton.defaultProps = {
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

export default SecondaryButton;
