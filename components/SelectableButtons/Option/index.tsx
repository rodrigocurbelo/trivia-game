import React from 'react';
import classNames from 'classnames';

import Spacing from '../../Core/Spacing';
import styles from './styles.scss';
import Text from '../../Core/Text';

type Props = {
  text?: string;
  children?: React.ReactNode;
  selected?: boolean;
  centeredText?: boolean;
};

export default function Option({
  text,
  children,
  centeredText,
  selected
}: Props) {
  return (
    <Spacing allSides={2}>
      <div
        className={
          classNames(styles.container, { [styles.selected]: selected })
        }
      >
        {children || <Text centered={centeredText}>{text}</Text>}
      </div>
    </Spacing>
  );
}
