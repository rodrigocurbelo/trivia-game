import React from 'react';

import Spacing from '../../Core/Spacing';
import styles from './styles.scss';
import Text from '../../Core/Text';

type Props = {
  text: string;
  children?: React.ReactNode;
};

export default function Option({ text, children }: Props) {
  return (
    <Spacing allSides={2}>
      <div className={styles.container}>{children || <Text>{text}</Text>}</div>
    </Spacing>
  );
}
