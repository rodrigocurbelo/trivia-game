import React from 'react';

import styles from './styles.scss';

type Props = {
  children?: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h1 className={styles.title}>{children}</h1>;
}
