import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

type Props = {
  centered?: boolean;
  children?: React.ReactNode;
};

export default function Text({ centered, children }: Props) {
  return (
    <p className={classNames(styles.text, { [styles.centered]: centered })}>
      {children}
    </p>
  );
}
