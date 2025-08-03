import { ButtonHTMLAttributes } from 'react';

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) => {
  return (
    <button
      className="bg-primary max-h-[44px] cursor-pointer rounded-lg py-[13px] font-bold text-white"
      {...props}
    >
      {children}
    </button>
  );
};
