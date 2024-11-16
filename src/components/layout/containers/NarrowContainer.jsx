import React from 'react';
import PropTypes from 'prop-types';

/**
 * NarrowContainer Component
 *
 * This component provides a responsive container with a configurable maximum width.
 * It is designed to wrap content that should appear within a narrower, customizable
 * section of the page.
 *
 * Props:
 * - `children`: React nodes (components or elements) to be rendered inside the container.
 * - `maxWidth`: String representing Tailwind max-width classes (e.g., "max-w-md", "max-w-lg").
 */
const NarrowContainer = ({ children, maxWidth }) => {
  return (
    // Container div with responsive padding and custom maximum width setting
    <div className={`mx-auto sm:px-6 lg:px-8 ${maxWidth}`}>{children}</div>
  );
};

NarrowContainer.propTypes = {
  /**
   * `children` is any valid React node that will be rendered inside the container.
   * This can be text, HTML elements, or other React components.
   * PropTypes.node ensures flexibility by accepting any renderable content.
   */
  children: PropTypes.node,

  /**
   * `maxWidth` allows the consumer to specify the maximum width of the container
   * using Tailwind's max-width classes (e.g., "max-w-md", "max-w-lg").
   */
  maxWidth: PropTypes.string,
};

NarrowContainer.defaultProps = {
  /**
   * Default value for `children` is `null` to handle cases
   * where no content is passed to the component.
   */
  children: null,

  /**
   * Default maximum width is set to "max-w-3xl".
   */
  maxWidth: 'max-w-3xl',
};

export default NarrowContainer;
