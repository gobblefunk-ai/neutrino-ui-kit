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
    background: 'bg-valhalla text-white',
    hoverBackground: 'hover:bg-constellation-blue',
    focusOutline: 'focus:outline-none focus:ring-2 focus:ring-offset-2',
    rounded: 'rounded-md',
    shadow: 'shadow-sm',
  };

  const mergedTheme = { ...primaryTheme, ...theme };

  return <Button theme={mergedTheme} {...props} />;
};

PrimaryButton.propTypes = {
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
