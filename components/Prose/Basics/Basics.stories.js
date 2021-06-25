import React from 'react';

import { Body } from './Body/Body';
import { Title } from './Title/Title';

export default {
  title: 'Prose/Basics',
  component: Body,
};

export const BodyDemo = () => (
    <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
        facilisis enim. Integer euismod ullamcorper gravida. Nulla luctus
        facilisis ornare. Nulla quam turpis, faucibus a euismod eget,
        scelerisque sed risus.
    </Body>
)
BodyDemo.storyName = "Body"

export const TitleDemo = () => (
    <Title>Title of an Article</Title>
)
TitleDemo.storyName = "Title"
