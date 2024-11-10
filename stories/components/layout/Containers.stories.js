import React from 'react';
import Container from '../../../src/components/containers/Container';
import FullWidthContainer from '../../../src/components/containers/FullWidthContainer';
import ConstrainedContainer from '../../../src/components/containers/ConstrainedContainer';
import BoxContainer from '../../../src/components/containers/BoxContainer';
import NarrowContainer from '../../../src/components/containers/NarrowContainer';

export default {
  title: 'Components/Layout/Containers',
  component: Container,
  tag: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

const DefaultContainerTemplate = (args) => <Container {...args} />;
const FullWidthContainerTemplate = (args) => <FullWidthContainer {...args} />;
const BoxContainerTemplate = (args) => <BoxContainer {...args} />;
const NarrowContainerTemplate = (args) => <NarrowContainer {...args} />;

const ConstrainedContainerTemplate = (args) => (
  <ConstrainedContainer {...args} />
);

const backgroundFillElement = {
  children: <div class="h-48 bg-bleached-silk"></div>,
};

export const Default = DefaultContainerTemplate.bind({});
Default.args = backgroundFillElement;

export const FullWidth = FullWidthContainerTemplate.bind({});
FullWidth.args = backgroundFillElement;

export const ConstrainedWidth = ConstrainedContainerTemplate.bind({});
ConstrainedWidth.args = backgroundFillElement;

export const Box = BoxContainerTemplate.bind({});
Box.args = backgroundFillElement;

export const NarrowWidth = NarrowContainerTemplate.bind({});
NarrowWidth.args = backgroundFillElement;
