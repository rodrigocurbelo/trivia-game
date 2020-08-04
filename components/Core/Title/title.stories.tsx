import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '.';

storiesOf('Title', module).add('with text', () => {
  return <Title>This is a title.</Title>;
});
