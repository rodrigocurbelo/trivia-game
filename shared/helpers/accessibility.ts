// Coding for the keyboard is important for users with physical disabilities
// who cannot use a mouse.
// This function will return a set of props that you can destructure into any
// element where you're enforcing an onClick event. Example:
// const MyComponent = (onClick) => (
//   <div {...onClickAndEnterPress(onClick)}><Text>Click me.</Text></div>
// );
export function onClickAndEnterPress(onClick) {
  return {
    onClick,
    onKeyDown: (...props: { keyCode: number; }[]) => {
      if (props[0].keyCode === 13) {
        onClick(props);
      }
    }
  };
}
