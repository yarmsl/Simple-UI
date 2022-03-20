import { ThemeProvider } from '@emotion/react';
import { memo } from 'react';
import Router from './Router';
import { theme } from './ui/theme';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default memo(App);
