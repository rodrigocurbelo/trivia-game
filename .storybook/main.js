const path = require('path');

module.exports = {
  stories: [
    '../**/*.stories.ts',
    '../**/*.stories.tsx',
    '../**/*.stories.js',
    '../**/*.stories.jsx',
  ],
  addons: ['@storybook/preset-typescript'],
  presets: [path.resolve(__dirname, './next-preset.js')],
};
