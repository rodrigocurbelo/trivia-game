type OnClickAndEnterPressType = {
  onClick: (keyCode) => void;
  tabIndex?: number;
  onKeyDown: (event) => void;
};

// Coding for the keyboard is important for users with physical disabilities
// who cannot use a mouse.
// This function will return a set of props that you can destructure into any
// element where you're enforcing an onClick event. Example:
// const MyComponent = (onClick) => (
//   <div {...onClickAndEnterPress(onClick)}><Text>Click me.</Text></div>
// );
export function onClickAndEnterPress(
  onClick,
  tabIndex = 0
): OnClickAndEnterPressType {
  const props: OnClickAndEnterPressType = {
    onClick,
    onKeyDown: (event: React.KeyboardEvent) => {
      event.stopPropagation();

      if (event.keyCode === 13) {
        onClick(event);
      }
    }
  };

  if (onClick) {
    props.tabIndex = tabIndex;
  }

  return props;
}
