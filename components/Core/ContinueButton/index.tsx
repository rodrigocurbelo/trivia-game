import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';
import Spacing from '../Spacing';
import Text from '../Text';

type Props = {
  onValidateClick: () => void;
  onContinueClick: () => void;
  isValidate?: boolean;
};

export default function ContinueButton({
  onValidateClick,
  onContinueClick,
  isValidate,
}: Props) {
  return (
    <Spacing
      allSides={2}
      onClick={() => (isValidate ? onValidateClick() : onContinueClick())}
      className={classNames(styles.button, {
        [styles.positiveColor]: isValidate,
      })}
    >
      <Text uppercase>
        <b>{isValidate ? 'Validate' : 'Continue'}</b>
      </Text>
    </Spacing>
  );
}
