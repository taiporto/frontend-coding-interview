import { AnchorHTMLAttributes } from 'react';

export const Link = ({
  children,
  size = 'sm',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: 'sm' | 'md';
}) => {
  const classNames = typeof className !== 'undefined' ? className : '';
  return (
    <a className={`${classNames} text-primary cursor-pointer text-${size}`} {...props}>
      {children}
    </a>
  );
};
