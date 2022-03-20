import { css } from '@emotion/react';

export const Button: React.FC<MButtonProps> = ({ children, ...rest }) => (
  <button css={css({ color: 'red' })} type={rest.type || 'button'} {...rest}>
    {children}
  </button>
);
