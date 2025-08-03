import { InputHTMLAttributes } from 'react';
import { Link } from './Link';

export const FormControl = ({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: boolean }) => {
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="flex max-h-[16px] justify-between">
        <label htmlFor={props.id} className={`text-sm font-bold`}>
          {label}
        </label>
        {props.type === 'password' && (
          <Link href="#" size="sm">
            Forgot password?
          </Link>
        )}
      </div>
      <input
        aria-invalid={error}
        className="border-secondary max-h-[44px] rounded-lg border px-[10px] py-[13px]"
        {...props}
      />
    </div>
  );
};
