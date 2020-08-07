import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Flag from '.';

storiesOf('selectable-buttons/Flag', module)
  .add('default', () => {
    return <Flag countryCode="CA" />;
  })
  .add('With text', () => {
    return <Flag countryCode="CA" text="I'm being added using the 'text' property" />;
  })
  .add('Wrong', () => {
    return <Flag wrong countryCode="CA" text="I'm being added using the 'text' property" />;
  })
  .add('Hidden text and disabled', () => {
    return <Flag hideText disabled countryCode="CA" text="I'm being added using the 'text' property" />;
  });
