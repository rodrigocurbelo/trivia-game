import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

type Props = {
  centered?: boolean;
  children?: React.ReactNode;
  uppercase?: boolean;
};

export default function Text({ centered, uppercase, children }: Props) {
  return (
    <p
      className={classNames(
        styles.text,
        { [styles.centered]: centered, [styles.uppercase]: uppercase }
      )}
    >
      {children}
    </p>
  );
}
