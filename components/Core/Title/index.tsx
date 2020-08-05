import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

type Props = {
  centered?: boolean;
  children?: React.ReactNode;
};

export default function Title({ children, centered }: Props) {
  return (
    <h1 className={classNames(styles.title, { [styles.centered]: centered })}>
      {children}
    </h1>
  );
}
