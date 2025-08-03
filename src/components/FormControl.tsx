import { InputHTMLAttributes } from "react";
import { Link } from "./Link";

export const FormControl = ({ label, error, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string, error?: boolean }) => {
    return (
        <div className="flex flex-col gap-[11px]">
            <div className="flex justify-between max-h-[16px]">
                <label htmlFor={props.id} className={`text-sm font-bold`}>{label}</label>
                {props.type === 'password' &&
                    <Link href="#" size="sm">Forgot password?</Link>
                }
            </div>
            <input aria-invalid={error} className="border border-secondary rounded-lg px-[10px] py-[13px] max-h-[44px]" {...props} />
        </div>
    )
}