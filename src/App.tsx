import { ThemeProvider } from '@emotion/react';
import { memo } from 'react';
import Router from './Router';
import { CssReset, theme } from './ui';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssReset />
    <Router />
  </ThemeProvider>
);

export default memo(App);
