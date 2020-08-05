import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '.';

storiesOf('core-ui/Text', module)
  .add('default', () => {
    return <Text>This is a Text.</Text>;
  })
  .add('centered', () => {
    return <Text centered>This is a centered Text.</Text>;
  })
  .add('centered and partially bold', () => {
    return (
      <Text centered>
        This is a centered and <b>bold</b> Text.
      </Text>
    );
  });
