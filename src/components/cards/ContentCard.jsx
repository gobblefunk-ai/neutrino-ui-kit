import React from 'react';
import PropTypes from 'prop-types';
import FullWidthContainer from '../containers/FullWidthContainer';
import ResponsiveCard from './ResponsiveCard';

/**
 * ResponsiveCard nested inside FullWidthContainer
 *
 * This component renders content inside of a card, which is wrapped within a full-width container.
 * It accepts content as a child and provides a structured layout with responsive styling.
 *
 */
const ContentCard = ({ content }) => {
  return (
    <FullWidthContainer>
      <ResponsiveCard>{content}</ResponsiveCard>
    </FullWidthContainer>
  );
};

ContentCard.propTypes = {
  /**
   * `content` can be any valid React node that will be displayed inside the card.
   * PropTypes.node covers any renderable content, allowing flexibility.
   */
  content: PropTypes.node,
};

ContentCard.defaultProps = {
  content: null,
};

export default ContentCard;
