import React from 'react';
import PropTypes from 'prop-types';

/**
 * ResponsiveCard component to display content within a full-width, styled container Card, edge-to-edge on mobile.
 *
 * Use inside of FullWidthContainer
 */
function ResponsiveCard({ children }) {
  return (
    <div className="bg-white shadow sm:rounded-lg w-full overflow-hidden">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}

ResponsiveCard.propTypes = {
  /**
   * Content to be displayed within the card. Supports React nodes, such as text, images, or nested elements.
   */
  children: PropTypes.node,
};

ResponsiveCard.defaultProps = {
  children: null,
};

export default ResponsiveCard;
