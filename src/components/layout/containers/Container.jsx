import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container Component
 *
 * This component serves as a responsive container with controlled maximum width. It is
 * intended to wrap content that should have centered, constrained width.
 *
 * Props:
 * - `children`: React nodes (components or elements) to be rendered inside the container.
 */
const Container = ({ children }) => {
  return (
    // Container div with responsive padding and maximum width settings
    <div className="mx-auto sm:px-6 lg:px-8 container">{children}</div>
  );
};

Container.propTypes = {
  /**
   * `children` is any valid React node that will be rendered inside the container.
   * This can be text, HTML elements, or other React components.
   */
  children: PropTypes.node,
};

Container.defaultProps = {
  /**
   * Default value for `children` is `null`, preventing potential errors
   * when no content is provided to the component.
   */
  children: null,
};

export default Container;
