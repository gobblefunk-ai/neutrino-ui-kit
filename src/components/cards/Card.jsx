import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component to display content within a styled container.
 * Supports optional header and footer sections with configurable background colors.
 */
function Card({
  children,
  header,
  footer,
  bodyBgColor,
  footerBgColor,
  divide,
  maxWidth,
}) {
  const divideClasses = divide ? 'divide-y divide-gray-200' : '';
  return (
    <div
      className={`bg-white shadow rounded-lg overflow-hidden ${divideClasses} ${maxWidth}`}
    >
      {header && <div className="px-4 sm:px-6 py-5">{header}</div>}
      <div className={`px-4 py-5 sm:p-6 ${bodyBgColor}`}>{children}</div>
      {footer && (
        <div className={`px-4 py-4 sm:px-6 ${footerBgColor}`}>{footer}</div>
      )}
    </div>
  );
}

Card.propTypes = {
  /**
   * Content to be displayed within the card body.
   * Supports React nodes, such as text, images, or nested elements.
   */
  children: PropTypes.node,
  /**
   * Optional content to be displayed in the card header.
   * Supports React nodes.
   */
  header: PropTypes.node,
  /**
   * Optional content to be displayed in the card footer.
   * Supports React nodes.
   */
  footer: PropTypes.node,
  /**
   * Tailwind CSS class for body background color. Example: 'bg-gray-50'.
   */
  bodyBgColor: PropTypes.string,
  /**
   * Tailwind CSS class for footer background color. Example: 'bg-gray-50'.
   */
  footerBgColor: PropTypes.string,
  /**
   * Whether to add dividing lines between header, body, and footer.
   */
  divide: PropTypes.bool,
  /**
   * Tailwind CSS max-width class to control the card width. Example: 'max-w-sm', 'max-w-md', etc.
   */
  maxWidth: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  header: null,
  footer: null,
  bodyBgColor: '',
  footerBgColor: '',
  divide: false,
  maxWidth: 'max-w-md',
};

export default Card;
