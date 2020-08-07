import React from 'react';
import classNames from 'classnames';

import Spacing from '../../Core/Spacing';
import styles from './styles.scss';
import Text from '../../Core/Text';
import { onClickAndEnterPress } from '../../../shared/helpers/accessibility';

type Props = {
  text?: string;
  wrong?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  centeredText?: boolean;
};

export default function Option({
  text,
  wrong,
  onClick,
  children,
  disabled,
  selected,
  centeredText,
}: Props) {
  return (
    <Spacing allSides={2}>
      <div
        {...onClickAndEnterPress(
          () => !disabled && onClick(), disabled ? -1 : 0)
        }
        className={
          classNames(
            styles.container,
            {
              [styles.wrong]: wrong,
              [styles.selected]: selected,
              [styles.disabled]: disabled,
            }
          )
        }
      >
        {children || <Text centered={centeredText}>{text}</Text>}
      </div>
    </Spacing>
  );
}
