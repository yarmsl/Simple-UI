import { useTheme } from '@emotion/react';

export const Button: React.FC<SButtonProps> = ({ children, ...rest }) => {
  const { palette, shape } = useTheme();
  return (
    <button
      css={{
        backgroundColor: palette.primary.main,
        borderRadius: shape.radius,
        color: palette.primary.text,
        padding: '8px 12px',
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',
        '&:hover': {
          backgroundColor: palette.primary.light,
          transition: 'background-color 200ms ease-in-out',
        },
        '&:active': {
          backgroundColor: palette.primary.dark,
          transition: 'background-color 200ms ease-in-out',
        },
      }}
      type={rest.type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};
