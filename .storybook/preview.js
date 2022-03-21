import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import { CssReset, theme } from '../src/ui';

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <CssReset />
    <Story />
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
