import { ThemeProvider } from '@emotion/react';
import { FC, memo } from 'react';
import { CssReset, theme } from '../../ui';

export const SimpleUIProvider: FC<ISimpleUIProviderProps> = memo(
  ({ children }) => (
    <ThemeProvider theme={theme}>
      <CssReset />
      {children}
    </ThemeProvider>
  )
);
