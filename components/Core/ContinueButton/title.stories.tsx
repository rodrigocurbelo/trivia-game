import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ContinueButton from '.';

storiesOf('core-ui/ContinueButton', module)
  .add('isValidate=true', () => {
    return (
      <ContinueButton
        isValidate
        onValidateClick={() => {}}
        onContinueClick={() => {}}
      />
    );
  })
  .add('isValidate=false', () => {
    return (
      <ContinueButton
        isValidate={false}
        onValidateClick={() => {}}
        onContinueClick={() => {}}
      />
    );
  });
