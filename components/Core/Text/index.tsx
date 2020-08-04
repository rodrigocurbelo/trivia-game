import React from 'react';

import styles from './styles.scss';

type Props = {
  children?: React.ReactNode;
};

export default function Text({ children }: Props) {
  return <p className={styles.text}>{children}</p>;
}
