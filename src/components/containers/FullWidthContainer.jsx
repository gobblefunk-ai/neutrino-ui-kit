import React from 'react';
import PropTypes from 'prop-types';

/**
 * FullWidthContainer Component
 *
 * This component serves as a responsive, full-width container. This component is intended to be used as a wrapper
 * for other content or components that should be displayed within a full-width
 * container.
 *
 * Props:
 * - `children`: React nodes (components or elements) to be rendered inside the container.
 */
const FullWidthContainer = ({ children }) => {
  return (
    // Container div with responsive padding and maximum width settings
    <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">{children}</div>
  );
};

FullWidthContainer.propTypes = {
  /**
   * `children` is any valid React node that will be rendered inside the container.
   * This can be text, HTML elements, or other React components.
   * PropTypes.node covers any renderable content, ensuring flexibility.
   */
  children: PropTypes.node,
};

FullWidthContainer.defaultProps = {
  /**
   * Default value for `children` is set to `null` to handle cases
   * where no content is passed to the component. This prevents
   * potential errors or warnings in React.
   */
  children: null,
};

export default FullWidthContainer;
