import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Option from '.';

storiesOf('selectable-buttons/Option', module)
  .add('default', () => {
    return <Option />;
  })
  .add('With text', () => {
    return <Option text="I'm being added using the 'text' property" />;
  })
  .add('With a long text', () => {
    return (
      <Option text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    );
  })
  .add('With a long and centered text', () => {
    return (
      <Option
        centeredText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    );
  });
