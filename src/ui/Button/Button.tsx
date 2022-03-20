import { useTheme } from '@emotion/react';

export const Button: React.FC<MButtonProps> = ({ children, ...rest }) => {
  const { palette } = useTheme();
  return (
    <button
      css={{
        backgroundColor: palette.primary.main,
        color: palette.primary.text,
      }}
      type={rest.type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};
