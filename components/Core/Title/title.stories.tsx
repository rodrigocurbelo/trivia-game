import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '.';

storiesOf('core-ui/Title', module)
  .add('default', () => {
    return <Title>This is a Title.</Title>;
  })
  .add('centered', () => {
    return <Title centered>This is a centered Title.</Title>;
  })
  .add('centered and partially bold', () => {
    return (
      <Title centered>
        This is a centered and <b>bold</b> Title.
      </Title>
    );
  });
