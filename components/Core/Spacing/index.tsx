// In order to keep proper spacing throughout the project (instead of
// magic numbers flying around), we should use this component as a wrapper
// to get spacing that will always remain coherent.
// In case spacing has to be defined from a .scss file, there is another
// constant you can refer to (defined in shared/styles/constants/_spacing.scss).

import React from 'react';

import { SPACING } from '../../../shared/constants/spacing';
import { onClickAndEnterPress } from '../../../shared/helpers/accessibility';

type Props = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  allSides?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  styleContainer?: React.CSSProperties;
  classNameContainer?: string;
  children?: React.ReactNode;
};

export default function Spacing({
  top,
  left,
  right,
  bottom,
  style,
  onClick,
  allSides,
  children,
  className,
  styleContainer,
  classNameContainer,
}: Props) {
  const defineSpaceForAxis = (side) => (side ?? allSides ?? 0) * SPACING;

  return (
    <div
      style={{
        paddingTop: defineSpaceForAxis(top),
        paddingLeft: defineSpaceForAxis(left),
        paddingRight: defineSpaceForAxis(right),
        paddingBottom: defineSpaceForAxis(bottom),
        ...styleContainer,
      }}
      className={classNameContainer}
    >
      <div
        style={style}
        className={className}
        {...onClickAndEnterPress(onClick)}
      >
        {children}
      </div>
    </div>
  );
}
