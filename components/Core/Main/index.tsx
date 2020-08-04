import React from 'react';

import styles from './styles.scss';

type Props = {
  children?: React.ReactNode;
};

export default function Main({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
