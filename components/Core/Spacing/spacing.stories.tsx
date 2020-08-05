import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Spacing from '.';
import Text from '../Text';

const Wrapper = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 30,
    }}
  >
    <Spacing bottom={5}>
      <div style={{ maxWidth: 700 }}>
        <Text centered>
          In order to keep proper spacing throughout the project (instead of
          magic numbers flying around), we should use this component as a
          wrapper to get spacing that will always remain coherent. In case
          spacing has to be defined from a .scss file, there is another constant
          you can refer to (defined in shared/styles/constants/_spacing.scss).
        </Text>
      </div>
    </Spacing>

    <div
      style={{
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'white',
      }}
    >
      {children}
    </div>
  </div>
);

const Square = () => (
  <div
    style={{
      width: 200,
      height: 200,
      backgroundColor: 'white',
    }}
  />
);

storiesOf('core-ui/Spacing', module)
  .add('allSides=5', () => {
    return (
      <Wrapper>
        <Spacing allSides={5}>
          <Square />
        </Spacing>
      </Wrapper>
    );
  })
  .add('top=5, left=1, right=2, bottom=1', () => {
    return (
      <Wrapper>
        <Spacing top={5} left={1} right={2} bottom={1}>
          <Square />
        </Spacing>
      </Wrapper>
    );
  })
  .add('bottom=5', () => {
    return (
      <Wrapper>
        <Spacing bottom={5}>
          <Square />
        </Spacing>
      </Wrapper>
    );
  })
  .add('top=5 allSides=10', () => {
    return (
      <Wrapper>
        <Spacing top={5} allSides={10}>
          <Square />
        </Spacing>
      </Wrapper>
    );
  })
  .add('No arguments', () => {
    return (
      <Wrapper>
        <Spacing>
          <Square />
        </Spacing>
      </Wrapper>
    );
  });
