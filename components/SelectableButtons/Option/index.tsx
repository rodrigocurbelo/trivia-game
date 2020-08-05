import React from 'react';

import Spacing from '../../Core/Spacing';
import styles from './styles.scss';
import Text from '../../Core/Text';

type Props = {
  text?: string;
  children?: React.ReactNode;
  centeredText?: boolean;
};

export default function Option({ text, children, centeredText }: Props) {
  return (
    <Spacing allSides={2}>
      <div className={styles.container}>
        {children || <Text centered={centeredText}>{text}</Text>}
      </div>
    </Spacing>
  );
}
