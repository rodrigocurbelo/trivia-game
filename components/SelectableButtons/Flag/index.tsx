import React from 'react';
import classNames from 'classnames';

import Spacing from '../../Core/Spacing';
import styles from './styles.scss';
import Text from '../../Core/Text';
import { onClickAndEnterPress } from '../../../shared/helpers/accessibility';
import { flagUrl } from '../../../shared/helpers/flags';

type Props = {
  text?: string;
  wrong?: boolean;
  onClick?: () => void;
  hideText?: boolean;
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  alpha2Code: string;
};

export default function Flag({
  text,
  wrong,
  onClick,
  hideText,
  children,
  disabled,
  selected,
  alpha2Code,
}: Props) {
  return (
    <Spacing allSides={2} classNameContainer={styles.wrapper}>
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
        <img
          alt="Flag"
          src={flagUrl(alpha2Code)}
          className={styles.flag}
        />
      </div>

      <div className={styles.textWrapper}>
        {!hideText && (
          <Spacing top={selected && 1}>
            <div className={styles.textContainer}>
              <Text centered>{children || text}</Text>
            </div>
          </Spacing>
        )}
      </div>
    </Spacing>
  );
}
