import { FC } from 'react';

export const Input: FC<SInputProps> = ({ variant, ...rest }) => (
  <div>
    <input {...rest} />
  </div>
);
