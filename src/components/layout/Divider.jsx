import React from 'react';
import PropTypes from 'prop-types';

/**
 * Divider component to separate content with an optional label, icon, button, or custom content.
 * It can be aligned differently and styled using Tailwind CSS classes.
 */
const Divider = ({
  children,
  align,
  lineColor,
  containerClassName,
  itemsCenter,
}) => {
  const alignmentClass = align ? `justify-${align}` : 'justify-center';
  const itemsCenterClass = itemsCenter ? 'items-center' : '';

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className={`w-full border-t ${lineColor}`} />
      </div>
      <div
        className={`relative flex ${itemsCenterClass} ${alignmentClass} ${containerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

Divider.propTypes = {
  /**
   * Content to be displayed over the divider line.
   * Can be text, icon, button, or any React node.
   */
  children: PropTypes.node,
  /**
   * Alignment of the content over the divider line.
   * Accepts 'start', 'center', 'end', 'between', 'around', 'evenly'.
   */
  align: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  /**
   * Tailwind CSS class for the line color.
   * Example: 'border-gray-300'.
   */
  lineColor: PropTypes.string,
  /**
   * Additional Tailwind CSS classes for the container wrapper.
   */
  containerClassName: PropTypes.string,
  /**
   * Whether to apply 'items-center' class to the container.
   */
  itemsCenter: PropTypes.bool,
};

Divider.defaultProps = {
  children: null,
  align: 'center',
  lineColor: 'border-gray-300',
  containerClassName: '',
  itemsCenter: false,
};

export default Divider;
