import { useTheme } from '@emotion/react';

export const Button: React.FC<MButtonProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <button
      css={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
      }}
      type={rest.type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};
