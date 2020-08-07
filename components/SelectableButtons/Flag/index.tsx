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
  countryCode: string;
};

export default function Flag({
  text,
  wrong,
  onClick,
  hideText,
  disabled,
  selected,
  countryCode,
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
        <img
          alt="Flag"
          src={flagUrl(countryCode)}
          className={styles.flag}
        />
      </div>

      <div className={styles.textWrapper}>
        {!hideText && (
          <Spacing top={selected && 1}>
            <div className={styles.textContainer}>
              <Text centered>{text}</Text>
            </div>
          </Spacing>
        )}
      </div>
    </Spacing>
  );
}
