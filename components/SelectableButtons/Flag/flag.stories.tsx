import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Flag from '.';

storiesOf('selectable-buttons/Flag', module)
  .add('default', () => {
    return <Flag alpha2Code="CA" />;
  })
  .add('With text', () => {
    return <Flag alpha2Code="CA" text="I'm being added using the 'text' property" />;
  })
  .add('Wrong', () => {
    return <Flag wrong alpha2Code="CA" text="I'm being added using the 'text' property" />;
  })
  .add('Hidden text and disabled', () => {
    return <Flag hideText disabled alpha2Code="CA" text="I'm being added using the 'text' property" />;
  });
