// type MButtonProps = {
//   children: React.ReactNode;
//   type?: 'button' | 'reset' | 'submit';
// } & Omit<
//   React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   >,
//   'type'
// >;

interface MButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}
