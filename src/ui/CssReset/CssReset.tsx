import { Global } from '@emotion/react';

export const CssReset = (): JSX.Element => (
  <Global
    styles={{
      'html, body, #root': {
        width: '100%',
        margin: 0,
      },
      button: {
        outline: 'none',
        border: 'none',
      },
    }}
  />
);
