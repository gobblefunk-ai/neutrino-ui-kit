import React from 'react';
import PropTypes from 'prop-types';

/**
 * ConstrainedContainer Component
 *
 * This component serves as a responsive, centered container with controlled width and padding.
 * Use this component to wrap content that should be centered on the page without spanning the full width.
 *
 * Props:
 * - `children`: React nodes (components or elements) to be rendered inside the container.
 */
const ConstrainedContainer = ({ children }) => {
  return (
    // Centered container with responsive padding and maximum width settings
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">{children}</div>
  );
};

ConstrainedContainer.propTypes = {
  /**
   * `children` is any valid React node that will be rendered inside the container.
   * This can be text, HTML elements, or other React components.
   * PropTypes.node covers any renderable content, ensuring flexibility.
   */
  children: PropTypes.node,
};

ConstrainedContainer.defaultProps = {
  /**
   * Default value for `children` is set to `null` to handle cases
   * where no content is passed to the component. This prevents
   * potential errors or warnings in React.
   */
  children: null,
};

export default ConstrainedContainer;
