import { useTheme } from '@emotion/react';

export const Button: React.FC<MButtonProps> = ({ children, ...rest }) => {
  const { palette, shape } = useTheme();
  return (
    <button
      css={{
        backgroundColor: palette.primary.main,
        borderRadius: shape.radius,
        color: palette.primary.text,
        padding: '8px 12px',
      }}
      type={rest.type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};
