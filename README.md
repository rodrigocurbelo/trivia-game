# Trivia game

### Description
I love geography, but there are quite a few countries out there. This trivia game about geography will help you remember them all! 🌎🌍🌏
Worth mentioning, **This is a WIP** - just what I could do in a few hours. But I'm planning on adding a lot more to it! 🚀

### What I used in this project:
 - Next.js
 - Typescript
 - Storybook
 - Redux
 - Apollo
 - Sass
 - Linter hooked to the Precommit hook
 - The game is completely playable without a mouse

### Big TODOs:
 - [ ] **Storyshots**: Jest’s snapshot testing is the best way to do Structural Testing. This addon for storybook creates snapshots based on storybook stories. [Link to Storybook](https://storybook.js.org/docs/testing/structural-testing/)

 - [ ] **Reselect**: Reselect is a great library to implement redux selectors. Memoized selectors can be used to efficiently compute derived data from the Redux store. [Link](https://redux.js.org/recipes/computing-derived-data/)

 - [ ] **Storybook actions addon**: Getting logs of components' actions being fired is a great way to test the behavior of a component. [Link](https://www.npmjs.com/package/@storybook/addon-actions)

 - [ ] **Much much better typing**: Typing right now is pretty terrible. It needs a lot more love.

### Missing features:
 - [ ] **Quick questions on Menu**: A way to warm up - something similar to [these](https://www.triviawell.com/questions/countries).

 - [ ] **Find the anomaly**: There should be a section of the game where there are different cities/countries/flags and you should point the odd one out.

### Known bugs:
 - [ ] The prettier is messing up code every now and then. Check `exact-commits`'s implementation.

 - [ ] The US and Canada come up way too often, as the API I'm consuming only sends those 2 countries in North America.

 - [ ] Animations are a bit jumpy on some browsers in dev mode.
