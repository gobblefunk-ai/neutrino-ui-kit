// Combined Cards Stories

import React from 'react';
import Card from '../../../src/components/cards/Card';
import ContentCard from '../../../src/components/cards/ContentCard';
import ResponsiveCard from '../../../src/components/cards/ResponsiveCard';

// Centralized repeated child elements
const defaultCardChildren = (
  <p className="m-auto">
    This is some content within a card with the default max-width.
  </p>
);

const headerContent = (
  <h3 className="text-lg font-medium text-gray-900">Card Header</h3>
);

const footerContent = <p className="text-sm text-gray-500">Card Footer</p>;

const contentCardContent = <p>This is the content inside the card!</p>;

const responsiveCardContent = (
  <p>
    This is a full-width card with rounded edges. Place it inside of a
    container.
  </p>
);

// Default Export for Card Stories
export default {
  title: 'Components/Layout/Cards',
  component: Card,
  argTypes: {
    maxWidth: {
      control: 'text',
      description:
        'Tailwind CSS max-width class to control the card width. Example: max-w-sm, max-w-lg',
    },
    header: {
      control: 'text',
      description:
        'Content to be displayed in the card header. Supports React nodes.',
    },
    footer: {
      control: 'text',
      description:
        'Content to be displayed in the card footer. Supports React nodes.',
    },
    bodyBgColor: {
      control: 'text',
      description:
        "Tailwind CSS class for the card body's background color. Example: bg-gray-50",
    },
    footerBgColor: {
      control: 'text',
      description:
        'Tailwind CSS class for the footer background color. Example: bg-gray-50',
    },
    divide: {
      control: 'boolean',
      description:
        'Whether to add dividing lines between header, body, and footer sections.',
    },
  },
};

// Card Templates
const CardTemplate = (args) => <Card {...args} />;

// Card Stories
export const CardDefault = CardTemplate.bind({});
CardDefault.args = {
  children: defaultCardChildren,
};

export const CardWithHeader = CardTemplate.bind({});
CardWithHeader.args = {
  header: headerContent,
  children: (
    <p>This is some content within a card that includes a header section.</p>
  ),
};

export const CardWithFooter = CardTemplate.bind({});
CardWithFooter.args = {
  children: (
    <p>This is some content within a card that includes a footer section.</p>
  ),
  footer: footerContent,
};

export const CardWithHeaderAndFooter = CardTemplate.bind({});
CardWithHeaderAndFooter.args = {
  header: headerContent,
  children: (
    <p>
      This is some content within a card that includes both header and footer
      sections.
    </p>
  ),
  footer: footerContent,
};

export const CardWithGrayFooter = CardTemplate.bind({});
CardWithGrayFooter.args = {
  children: <p>This card has a gray footer section.</p>,
  footer: footerContent,
  footerBgColor: 'bg-gray-50',
};

export const CardWithGrayBody = CardTemplate.bind({});
CardWithGrayBody.args = {
  header: headerContent,
  children: <p>This card has a gray body section.</p>,
  bodyBgColor: 'bg-gray-50',
};

export const CardDividedSections = CardTemplate.bind({});
CardDividedSections.args = {
  header: headerContent,
  children: (
    <p>
      This card has dividing lines between the header, body, and footer
      sections.
    </p>
  ),
  footer: footerContent,
  divide: true,
};

export const CardSmallWidth = CardTemplate.bind({});
CardSmallWidth.args = {
  maxWidth: 'max-w-sm',
  children: (
    <p>This card has a smaller width, controlled via the maxWidth prop.</p>
  ),
};

export const CardLargeWidth = CardTemplate.bind({});
CardLargeWidth.args = {
  maxWidth: 'max-w-lg',
  children: (
    <p>This card has a larger width, controlled via the maxWidth prop.</p>
  ),
};

// Content Card Stories

export const ContentCardDefault = (args) => <ContentCard {...args} />;
ContentCardDefault.args = {
  content: contentCardContent,
};
ContentCardDefault.storyName = 'Content Card / Default';
ContentCardDefault.parameters = {
  layout: 'fullscreen',
};

// Responsive Card Stories

export const ResponsiveCardDefault = (args) => <ResponsiveCard {...args} />;
ResponsiveCardDefault.args = {
  children: responsiveCardContent,
};
ResponsiveCardDefault.storyName = 'Responsive Card / Default';
ResponsiveCardDefault.parameters = {
  layout: 'fullscreen',
};

export const ResponsiveCardEmpty = (args) => <ResponsiveCard {...args} />;
ResponsiveCardEmpty.args = {
  children: null,
};
ResponsiveCardEmpty.storyName = 'Responsive Card / Empty';
ResponsiveCardEmpty.parameters = {
  layout: 'fullscreen',
};
