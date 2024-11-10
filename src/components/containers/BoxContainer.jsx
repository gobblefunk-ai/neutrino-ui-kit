import React from 'react';
import PropTypes from 'prop-types';

/**
 * BoxContainer Component
 *
 * This component serves as a responsive, centered container with a limited maximum width and padding.
 * Use this component for boxed content that should have consistent spacing on all sides.
 *
 * Props:
 * - `children`: React nodes (components or elements) to be rendered inside the container.
 */
const BoxContainer = ({ children }) => {
  return (
    // Container div with padding, maximum width, and centered alignment
    <div className="bg-white shadow mx-auto px-4 sm:px-6 lg:px-8 py-6 rounded max-w-3xl">
      {children}
    </div>
  );
};

BoxContainer.propTypes = {
  /**
   * `children` is any valid React node that will be rendered inside the container.
   * This can be text, HTML elements, or other React components.
   * PropTypes.node allows for flexible content.
   */
  children: PropTypes.node,
};

BoxContainer.defaultProps = {
  /**
   * Default value for `children` is set to `null`, which prevents potential
   * errors or warnings when no content is passed.
   */
  children: null,
};

export default BoxContainer;
